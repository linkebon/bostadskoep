#!/bin/sh
echo '########### Building bostadskoep ###########'
rm -rf build
yarn install
yarn build
echo 'build is available under build/'
echo '########### Building complete ###########'