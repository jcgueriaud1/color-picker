#!/bin/bash -e

ghPagesBranch=gh-pages
echo "Using branch $ghPagesBranch"

git clone https://Juchar:${GITHUB_TOKEN}@github.com/Juchar/color-picker.git --branch=master gh-pages
cd gh-pages
git remote rm origin
git remote add origin https://Juchar:${GITHUB_TOKEN}@github.com/Juchar/color-picker.git

git branch -D $ghPagesBranch
git push origin --delete $ghPagesBranch
git checkout -b $ghPagesBranch master

git rm -r --cached .

bower cache clean
bower install --force
bower prune

polymer analyze > analysis.json

rm .gitignore
mv .gitignore-gh-pages .gitignore

git add .

git commit -m "Create GitHub Pages" --no-verify
git push origin $ghPagesBranch --force
