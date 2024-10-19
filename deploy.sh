#!/bin/bash

#TODO check for npm, pnpm and yarn 
yarn build

scp -r build/* root@<router_ip>:/www/tollgate/
scp router.lua root@<router_ip>:/www/tollgate/router.lua