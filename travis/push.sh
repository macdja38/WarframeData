#!/bin/sh

setup_git() {
  git config --global user.email "$GH_EMAIL"
  git config --global user.name "macdja38"
  git config --global push.default simple
}

commit_website_files() {
  git add YAML/*.yaml
  git add JSON/*.json
  git commit --message "$(git log -1 --pretty=%B)"
}

upload_files() {
  git remote set-url origin https://${GH_TOKEN}@github.com/macdja38/WarframeData.git > /dev/null 2>&1
  git push origin HEAD:master
}

setup_git
commit_website_files
upload_files
