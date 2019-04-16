#!/bin/bash
. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc

set -e

nvm use stable
npm run build
rm -rf ../build/*
cp -r public/* ../build
echo "#### Done ####"
