#!/usr/bin/env bash
if [ -z $CONTAINER_NAME ]; then 
  CONTAINER_NAME="universal-apps-website"
fi

if [ -z $TAG_NAME ]; then 
  TAG_NAME="latest"
fi

# docker build and release
NAME_TAG="$DOCKER_USER/$CONTAINER_NAME:$TAG_NAME"

TAG=$NAME_TAG ./scripts/docker-build.sh && \
DOCKER_USER=$DOCKER_USER TAG=$NAME_TAG ./scripts/docker-release.sh
