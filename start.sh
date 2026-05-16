#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# 기존 프로세스 정리
lsof -ti:8000 | xargs kill -9 2>/dev/null
lsof -ti:8001 | xargs kill -9 2>/dev/null
pkill -f "cloudflared tunnel run koovis" 2>/dev/null
sleep 0.5

# 프론트 서버 (포트 8000)
cd "$SCRIPT_DIR"
python3 -m http.server 8000 &
FRONT_PID=$!

# 백엔드 서버 (포트 8001)
cd "$SCRIPT_DIR/backend"
python3 -m uvicorn main:app --reload --port 8001 &
BACK_PID=$!

# cloudflared 터널 (caffeinate로 절전 방지 — 절전 시 QUIC 끊김 방지)
caffeinate -i cloudflared tunnel run koovis > /tmp/cloudflared.log 2>&1 &
TUNNEL_PID=$!

echo ""
echo "✅ KooVIS 서버 시작됨"
echo "   프론트: http://localhost:8000"
echo "   백엔드: http://localhost:8001"
echo "   터널:   cloudflared (PID: $TUNNEL_PID)"
echo ""
echo "종료하려면 Ctrl+C"

# Ctrl+C 시 모든 프로세스 종료
trap "kill $FRONT_PID $BACK_PID $TUNNEL_PID 2>/dev/null; echo '서버 종료'; exit" INT
wait
