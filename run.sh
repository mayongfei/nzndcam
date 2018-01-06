#!/bin/bash

# © Copyright 2017 EntIT Software LLC, a Micro Focus company
#
# Permission is hereby granted, free of charge, to any person obtaining a copy of
# this software and associated documentation files (the "Software"), to deal in
# the Software without restriction, including without limitation the rights to
# use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
# of the Software, and to permit persons to whom the Software is furnished to do
# so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

# exit on errors
set -e

# Set configuration in production by default
CONFIG_PATH=`dirname $0`

if [ "$CONFIG_PATH" = "." ]; then
  CONFIG_PATH=$PWD
fi

PACKAGE_NAME=${CONFIG_PATH##*/}

if [ "$NODE_ENV" = "production" ]; then
  export HUBOT_ENTERPRISE_ROOT="/opt/microfocus/$PACKAGE_NAME"
  export HUBOT_ENTERPRISE_ENV_DIR="/etc/opt/microfocus/$PACKAGE_NAME"
  export HUBOT_ENTERPRISE_CERTS_DIR="/etc/opt/microfocus/$PACKAGE_NAME/certs"
  export HUBOT_ENTERPRISE_LOG_DIR="/var/opt/microfocus/$PACKAGE_NAME/log"
  # Set log level to info for production
  export LOG_LEVEL="info"
elif [ "$NODE_ENV" = "development" ] || [ "$NODE_ENV" = "" ]; then
  echo "Running bot in development mode. To run in production set NODE_ENV=production."
  export HUBOT_ENTERPRISE_CERTS_DIR="$PWD/certs"
  export HUBOT_ENTERPRISE_ROOT="$PWD"
  export HUBOT_ENTERPRISE_ENV_DIR="$HUBOT_ENTERPRISE_ROOT"
  export HUBOT_ENTERPRISE_LOG_DIR="$HUBOT_ENTERPRISE_ROOT/logs"

  # Set log level to debug for development.
  export LOG_LEVEL="debug"
else
  echo "NODE_ENV=$NODE_ENV is not supported."
  echo "Please set to \"development\" or \"production\""
  echo "Exiting bot startup script."
  exit -1
fi


node $HUBOT_ENTERPRISE_ROOT/index.js
