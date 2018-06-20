#!/bin/bash

#echo "Waiting for example_container..."

#while ! nc -z example_container 3000; do
  #sleep 0.1
#done

#echo "example_container started"

echo "Starting Node container, environment: $NODE_ENV"

if [ "$NODE_ENV" = "production" ]; then
  cd /home/node/app && npm run start
fi

if [ "$NODE_ENV" = "development" ]; then
  cd /home/node/app && npm run dev
fi

if [ "$NODE_ENV" = "test" ]; then
  cd /home/node/app && npm run ci
fi
