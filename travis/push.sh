#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "macdja38"
  git config --global push.default simple
}

commit_website_files() {
  git add YAML/*.yaml
  git add JSON/*.json
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add origin https://${GH_TOKEN}@github.com/macdja38/WarframeData.git > /dev/null 2>&1
  git push
}

setup_git
commit_website_files
upload_files