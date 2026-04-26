import re
import os
import anthropic
from database import get_conn

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

SEGMENT_FLAGSHIP = "flagship"
SEGMENT_MIDRANGE = "midrange"
SEGMENT_BUDGET   = "budget"


def infer_segment(name: str) -> str:
    n = name.lower()
    # Apple
    if "iphone" in n:
        return SEGMENT_FLAGSHIP if any(x in n for x in ["pro max", " pro"]) else SEGMENT_MIDRANGE
    # Samsung
    if "galaxy" in n:
        if any(x in n for x in ["ultra", "z fold", "z flip"]):
            return SEGMENT_FLAGSHIP
        if re.search(r'galaxy\s+s\d', n):
            return SEGMENT_FLAGSHIP
        if re.search(r'galaxy\s+a\d', n):
            return SEGMENT_MIDRANGE
        if re.search(r'galaxy\s+[mf]\d', n):
            return SEGMENT_BUDGET
    # Google
    if "pixel" in n:
        if any(x in n for x in ["pro", "fold"]):
            return SEGMENT_FLAGSHIP
        if " a" in n:
            return SEGMENT_MIDRANGE
        return SEGMENT_MIDRANGE
    # OnePlus
    if "oneplus" in n:
        return SEGMENT_FLAGSHIP if any(x in n for x in ["pro", "ultra"]) else SEGMENT_MIDRANGE
    # Xiaomi
    if "xiaomi" in n or "redmi" in n or "poco" in n:
        if any(x in n for x in ["ultra", "pro+"]):
            return SEGMENT_FLAGSHIP
        if "redmi note" in n or "poco x" in n:
            return SEGMENT_MIDRANGE
        if "redmi" in n:
            return SEGMENT_BUDGET
    return SEGMENT_MIDRANGE


def _parse_float(value: str, pattern: str) -> float | None:
    m = re.search(pattern, value or "")
    return float(m.group(1)) if m else None

def _parse_int(value: str, pattern: str) -> int | None:
    m = re.search(pattern, value or "")
    return int(m.group(1)) if m else None

def parse_display_size(value: str) -> float | None:
    return _parse_float(value, r'(\d+\.?\d*)\s*inches')

def parse_panel_type(value: str) -> str:
    v = (value or "").upper()
    if "LTPO" in v: return "LTPO"
    if "AMOLED" in v: return "AMOLED"
    if "OLED" in v: return "OLED"
    if "LCD" in v: return "LCD"
    return "Other"

def parse_refresh_rate(value: str) -> int | None:
    return _parse_int(value, r'(\d+)Hz')

def parse_ap_brand(value: str) -> str:
    v = value or ""
    for brand in ["Snapdragon", "Exynos", "Dimensity", "Apple", "Kirin"]:
        if brand in v: return brand
    if "Helio" in v or "MediaTek" in v: return "MediaTek"
    return "Other"

def parse_process_node(value: str) -> int | None:
    return _parse_int(value, r'(\d+)\s*nm')

def parse_ram(value: str) -> int | None:
    return _parse_int(value, r'(\d+)\s*GB\s*RAM')

def parse_camera_mp(value: str) -> int | None:
    return _parse_int(value, r'(\d+)\s*MP')

def parse_battery(value: str) -> int | None:
    return _parse_int(value, r'(\d+)\s*mAh')

def parse_year(announced: str) -> int | None:
    m = re.search(r'(\d{4})', announced or "")
    return int(m.group(1)) if m else None


def aggregate_phones(ids: list[int]) -> list[dict]:
    conn = get_conn()
    result = []
    for pid in ids:
        phone = conn.execute("SELECT * FROM phones WHERE id=?", (pid,)).fetchone()
        if not phone:
            continue
        specs = conn.execute("SELECT category, key, value FROM specs WHERE phone_id=?", (pid,)).fetchall()
        spec_map: dict[tuple, str] = {(s["category"], s["key"]): s["value"] for s in specs}

        def sv(cat, key): return spec_map.get((cat, key), "") or ""

        announced   = sv("Launch", "Announced")
        display_raw = sv("Display", "Size")
        type_raw    = sv("Display", "Type")
        chip_raw    = sv("Platform", "Chipset")
        ram_raw     = sv("Memory", "RAM")
        # 메인 카메라는 "Main Camera" 또는 "Camera" 카테고리의 첫 번째 값에서 MP 추출
        cam_raw = ""
        for (cat, key), val in spec_map.items():
            if "camera" in cat.lower() and "mp" in val.lower():
                cam_raw = val
                break
        bat_raw = sv("Battery", "Type")

        segment = phone["segment"] or infer_segment(phone["name"])

        result.append({
            "id":           phone["id"],
            "name":         phone["name"],
            "brand":        phone["brand"] or "Unknown",
            "segment":      segment,
            "year":         parse_year(announced),
            "display_size": parse_display_size(display_raw),
            "panel_type":   parse_panel_type(type_raw) if type_raw else None,
            "refresh_rate": parse_refresh_rate(type_raw) if type_raw else None,
            "ap_brand":     parse_ap_brand(chip_raw) if chip_raw else None,
            "process_node": parse_process_node(chip_raw) if chip_raw else None,
            "ram":          parse_ram(ram_raw) if ram_raw else None,
            "camera_mp":    parse_camera_mp(cam_raw) if cam_raw else None,
            "battery":      parse_battery(bat_raw) if bat_raw else None,
        })
    conn.close()
    return result
