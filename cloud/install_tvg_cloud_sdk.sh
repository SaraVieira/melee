#!/bin/bash
source $(dirname "${BASH_SOURCE[0]}")/vars.sh

TAGS=""
if [ ! -z "$TVGCLOUDSDK_TAG" ]; then
  TAGS="--tags $TVGCLOUDSDK_TAG "
fi

TARGET_DIR=$(dirname "$0")/../tvg-cloud-sdk
rm -rf $TARGET_DIR
mkdir $TARGET_DIR
cd $TARGET_DIR

git init
git pull --depth 1 git@tvg.bitbucket.org:betfair-us/tvg-cloud-sdk.git $TAGS
if [ $? != 0 ]; then
    echo "\nCan't access to " git@tvg.bitbucket.org:betfair-us/tvg-cloud-sdk.git
    echo "\nTrying " git@bitbucket.org:betfair-us/tvg-cloud-sdk.git

    git pull --depth 1 git@bitbucket.org:betfair-us/tvg-cloud-sdk.git $TAGS
fi
