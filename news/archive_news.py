#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Daily News Archiving System
매일 자정에 실행되어 어제 뉴스를 월별 아카이브로 이동
"""

import os
import json
import re
from datetime import datetime, timedelta
from pathlib import Path

# 파일 경로
SCRIPT_DIR = Path(__file__).parent.absolute()  # news/ 폴더
NEWS_DATA_FILE = SCRIPT_DIR / "news_data.js"   # news/news_data.js
ARCHIVE_DIR = SCRIPT_DIR                        # 아카이브는 news/ 폴더에 저장

def parse_js_object(js_content):
    """JavaScript 파일의 객체를 파이썬 dict로 변환 (Node.js 사용)"""
    import subprocess
    import tempfile

    # window.NEWS_DATA = {...} 형식에서 {...} 부분 추출
    match = re.search(r'window\.\w+ = ({.*?});?\s*(?:/\*|//|$)', js_content, re.DOTALL)
    if not match:
        return None

    js_dict = match.group(1)

    # Node.js를 사용하여 JSON으로 변환
    node_script = f"""
const obj = {js_dict};
console.log(JSON.stringify(obj));
"""

    try:
        result = subprocess.run(
            ['node', '-e', node_script],
            capture_output=True,
            text=True,
            timeout=5
        )

        if result.returncode == 0:
            return json.loads(result.stdout.strip())
        else:
            print(f"Node.js 오류: {result.stderr}")
            return None

    except FileNotFoundError:
        # Node.js가 없으면 기본 파싱 시도
        print("⚠️  Node.js가 없어서 기본 파싱으로 재시도합니다.")
        return parse_js_object_fallback(js_dict)
    except Exception as e:
        print(f"파싱 오류: {e}")
        return None

def parse_js_object_fallback(js_dict):
    """Node.js가 없을 때 대체 파싱"""
    # 주석 제거
    js_dict = re.sub(r'//.*?\n', '\n', js_dict)  # // 주석 제거
    js_dict = re.sub(r'/\*.*?\*/', '', js_dict, flags=re.DOTALL)  # /* */ 주석 제거

    # 키의 따옴표 추가 (이미 따옴표가 있으면 유지)
    js_dict = re.sub(r'([{,\s])(\w+)(\s*:)', r'\1"\2"\3', js_dict)

    # 마지막 쉼표 제거
    js_dict = re.sub(r',(\s*[}\]])', r'\1', js_dict)

    try:
        return json.loads(js_dict)
    except json.JSONDecodeError as e:
        print(f"JSON 파싱 오류 (fallback): {e}")
        return None

def get_yesterday_date():
    """어제 날짜를 'YYYY.MM.DD' 형식으로 반환"""
    yesterday = datetime.now() - timedelta(days=1)
    return yesterday.strftime('%Y.%m.%d')

def get_archive_filename(date_str):
    """날짜 문자열에서 아카이브 파일명 생성 (예: '2026.04.13' → 'news_archive_2026_04.js')"""
    parts = date_str.split('.')
    return f"news_archive_{parts[0]}_{parts[1]}.js"

def load_news_data():
    """news_data.js에서 데이터 로드"""
    if not NEWS_DATA_FILE.exists():
        print(f"ERROR: {NEWS_DATA_FILE} 파일을 찾을 수 없습니다.")
        return None

    with open(NEWS_DATA_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    return parse_js_object(content)

def load_archive(archive_file):
    """기존 아카이브 파일 로드"""
    archive_path = ARCHIVE_DIR / archive_file

    if not archive_path.exists():
        return None

    with open(archive_path, 'r', encoding='utf-8') as f:
        content = f.read()

    return parse_js_object(content)

def extract_yesterday_news(news_data, yesterday_date):
    """어제 날짜의 뉴스를 추출"""
    yesterday_news = {}

    for brand, articles in news_data.items():
        if brand in ['date', 'lastUpdated']:
            continue

        if isinstance(articles, list):
            filtered = [a for a in articles if a.get('date') == yesterday_date]
            if filtered:
                yesterday_news[brand] = filtered

    return yesterday_news

def remove_yesterday_news(news_data, yesterday_date):
    """news_data에서 어제 뉴스 제거"""
    for brand, articles in news_data.items():
        if brand in ['date', 'lastUpdated']:
            continue

        if isinstance(articles, list):
            news_data[brand] = [a for a in articles if a.get('date') != yesterday_date]

    return news_data

def merge_into_archive(archive_data, yesterday_news, yesterday_date):
    """어제 뉴스를 아카이브에 병합"""
    if archive_data is None:
        # 새로운 아카이브 파일 생성
        parts = yesterday_date.split('.')
        archive_data = {
            'metadata': {
                'year': int(parts[0]),
                'month': int(parts[1]),
                'startDate': f"{parts[0]}.{parts[1]}.01",
                'endDate': f"{parts[0]}.{parts[1]}.31",
                'totalNews': 0
            }
        }

    # 브랜드별 뉴스 추가 또는 병합
    total_count = 0
    for brand, articles in yesterday_news.items():
        if brand not in archive_data:
            archive_data[brand] = []

        if isinstance(archive_data[brand], list):
            archive_data[brand].extend(articles)
            total_count += len(articles)
        else:
            archive_data[brand] = articles
            total_count += len(articles) if isinstance(articles, list) else 1

    # 메타데이터 업데이트
    if 'metadata' in archive_data:
        archive_data['metadata']['totalNews'] += total_count

    return archive_data

def save_js_file(filepath, varname, data):
    """Python dict를 JavaScript 파일로 저장"""
    # Python dict를 JSON 문자열로 변환
    json_str = json.dumps(data, ensure_ascii=False, indent=2)

    # JavaScript 파일 내용 생성
    js_content = f"""/* ============================================================
 * News Archive - {data.get('metadata', {}).get('year', 'N/A')}-{str(data.get('metadata', {}).get('month', 'N/A')).zfill(2)}
 * 자동 생성됨 (archive_news.py)
 * ============================================================ */

window.{varname} = {json_str};
"""

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"✓ 저장됨: {filepath.name}")

def archive_news():
    """메인 아카이빙 함수"""
    print("\n📅 Daily News Archiving System")
    print("=" * 50)

    yesterday_date = get_yesterday_date()
    print(f"📆 처리 날짜: {yesterday_date}")

    # 1. news_data.js 로드
    news_data = load_news_data()
    if not news_data:
        print("ERROR: news_data.js를 파싱할 수 없습니다.")
        return False

    # 2. 어제 뉴스 추출
    yesterday_news = extract_yesterday_news(news_data, yesterday_date)

    if not yesterday_news:
        print(f"ℹ️  {yesterday_date}에 수집된 뉴스가 없습니다.")
        return True

    total_yesterday = sum(len(v) if isinstance(v, list) else 1 for v in yesterday_news.values())
    print(f"📰 어제 뉴스: {total_yesterday}개")

    # 3. 아카이브 파일명 생성
    archive_file = get_archive_filename(yesterday_date)
    archive_path = ARCHIVE_DIR / archive_file

    # 4. 기존 아카이브 로드 또는 새로 생성
    archive_data = load_archive(archive_file)
    if archive_data:
        print(f"✓ 기존 아카이브 로드: {archive_file}")
    else:
        print(f"➕ 새 아카이브 생성: {archive_file}")

    # 5. 어제 뉴스를 아카이브에 병합
    archive_data = merge_into_archive(archive_data, yesterday_news, yesterday_date)

    # 6. 아카이브 파일 저장
    archive_varname = f"NEWS_ARCHIVE_{yesterday_date.replace('.', '_')}"
    save_js_file(archive_path, archive_varname, archive_data)

    # 7. news_data.js에서 어제 뉴스 제거
    news_data = remove_yesterday_news(news_data, yesterday_date)

    # 8. news_data.js 업데이트 (오늘 날짜로 업데이트)
    today = datetime.now().strftime('%Y.%m.%d')
    now_iso = datetime.now().isoformat(timespec='seconds') + '+09:00'

    news_data['date'] = today
    news_data['lastUpdated'] = now_iso

    # news_data.js 저장
    json_str = json.dumps(news_data, ensure_ascii=False, indent=2)
    js_content = f"""/* ============================================================
 * Daily News Data (Active: Today + This Week)
 * 아카이브: news_archive_YYYY_MM.js로 자동 이동
 * 구조: {{ date, samsung: [...], apple: [...], ... }}
 * ============================================================ */

window.NEWS_DATA = {json_str};
"""

    with open(NEWS_DATA_FILE, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"✓ 업데이트됨: news_data.js (어제 뉴스 {total_yesterday}개 제거)")

    print("\n✅ 아카이빙 완료!")
    return True

if __name__ == '__main__':
    try:
        success = archive_news()
        exit(0 if success else 1)
    except Exception as e:
        print(f"ERROR: {e}")
        import traceback
        traceback.print_exc()
        exit(1)
