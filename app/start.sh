#!/bin/bash
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH
#npm install
npm start
