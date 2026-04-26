/**
 * 동행복권 당첨 번호 자동 수집 (Playwright)
 * 사용: node lotto_fetch.js [시작회차] [끝회차]
 * 예:   node lotto_fetch.js 914 1179
 */
const { chromium } = require('playwright');

const START = parseInt(process.argv[2]) || 914;
const END   = parseInt(process.argv[3]) || 1180;
const API   = process.argv[4] || 'http://localhost:8001';

async function fetchDraw(page, round) {
  const url = `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${round}`;
  const res = await page.evaluate(async (u) => {
    const r = await fetch(u);
    return r.text();
  }, url);
  try {
    const d = JSON.parse(res);
    if (d.returnValue !== 'success') return null;
    return {
      round: d.drwNo,
      date:  d.drwNoDate,
      n1: d.drwtNo1, n2: d.drwtNo2, n3: d.drwtNo3,
      n4: d.drwtNo4, n5: d.drwtNo5, n6: d.drwtNo6,
      bonus: d.bnusNo,
      winners: d.firstPrzwnerCo,
      prize: d.firstWinamnt,
    };
  } catch { return null; }
}

(async () => {
  console.log(`회차 ${START}~${END} 수집 시작...`);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // 사이트 먼저 방문해 세션 획득
  await page.goto('https://www.dhlottery.co.kr/', { waitUntil: 'domcontentloaded', timeout: 15000 });

  let ok = 0, fail = 0;
  for (let round = START; round <= END; round++) {
    try {
      const d = await fetchDraw(page, round);
      if (!d) { fail++; continue; }

      const res = await fetch(`${API}/lotto/draws`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(d),
      });
      ok++;
      if (ok % 50 === 0) process.stdout.write(`  ${round}회차... (${ok}개 저장)\n`);
    } catch (e) {
      fail++;
    }
  }

  await browser.close();
  console.log(`완료: ${ok}개 저장, ${fail}개 실패`);
})();
