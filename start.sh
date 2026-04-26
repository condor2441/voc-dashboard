#!/bin/bash

# 기존 프로세스 정리
lsof -ti:8000 | xargs kill -9 2>/dev/null
lsof -ti:8001 | xargs kill -9 2>/dev/null
sleep 0.5

# 프론트 서버 (포트 8000)
python3 -m http.server 8000 &
FRONT_PID=$!

# 백엔드 서버 (포트 8001)
cd "$(dirname "$0")/backend"
python3 -m uvicorn main:app --reload --port 8001 &
BACK_PID=$!

echo ""
echo "✅ KooVIS 서버 시작됨"
echo "   프론트: http://localhost:8000"
echo "   백엔드: http://localhost:8001"
echo ""
echo "종료하려면 Ctrl+C"

# Ctrl+C 시 두 서버 모두 종료
trap "kill $FRONT_PID $BACK_PID 2>/dev/null; echo '서버 종료'; exit" INT
wait
