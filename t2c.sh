#!/bin/bash

cd server
npm i
npm start &
cd ../client
npm i
npm run dev &

