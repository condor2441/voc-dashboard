#!/bin/bash

echo "🚀 KooVIS 배포 시작..."

# PATH 설정
export PATH="$HOME/.fly/bin:$PATH"

# 1. GitHub push
echo ""
echo "📦 GitHub에 올리는 중..."
git add .
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M')" 2>/dev/null || echo "변경사항 없음 (코드)"
git push origin main
echo "✅ GitHub 완료"

# 2. Fly.io 백엔드 배포
echo ""
echo "🖥️  백엔드 배포 중..."
cd "$(dirname "$0")/backend"
flyctl deploy -a koovis-backend --quiet
echo "✅ 백엔드 완료"

# 3. Vercel 프론트 배포
echo ""
echo "🌐 프론트 배포 중..."
cd "$(dirname "$0")"
npx vercel --prod --yes 2>&1 | grep -E "(Production|Aliased|Error|✅)"
echo "✅ 프론트 완료"

echo ""
echo "🎉 배포 완료!"
echo "   사이트: https://koovis.vercel.app"
echo "   GitHub: https://condor2441.github.io/KooVIS/"
