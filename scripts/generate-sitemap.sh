

# public 폴더로 이동
cd public

# 기존 디렉토리 제거 및 빈 디렉토리 생성
rm -rf sitemap
mkdir sitemap



# 스크립트 폴더로 이동
cd ..
cd scripts

# robots.txt 생성
yarn node ./robots.js

# static sitemap 생성
echo "generating static sitemap..."
yarn node ./sitemap-common.js
echo "finished generating static sitemap!"

# sitemap 압축 및 병합
echo "gzipping sitemap..."
yarn node ./sitemap-compress.js
yarn node ./sitemap.js
echo "finished gzipping sitemap!"

# Google 서치 콘솔에 sitemap 업데이트 핑 전송
curl http://google.com/ping?sitemap=http://moonerd.dev/sitemap.xml
echo "sended sitemap ping to Google search console!"