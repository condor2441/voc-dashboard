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
