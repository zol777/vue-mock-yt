set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:zol777/vue-mock-yt.git master:gh-pages

cd -
