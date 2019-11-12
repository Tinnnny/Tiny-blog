#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git config --global user.email "847022952@qq.com"
git config --global user.name "Tinnnny"
git commit -m 'deploy'

git push -f git@github.com:Tinnnny/Tiny-blog.git master:gh-pages

cd -


