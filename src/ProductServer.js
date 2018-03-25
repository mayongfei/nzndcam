/**
 * Notes:
 * © Copyright 2017 EntIT Software LLC, a Micro Focus company
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const express = require('express');
const Router = require("./router/Router");
const http = require('http');
const logger = require('winston');

class ProductServer {
  constructor(options = {}) {
    let defaultOpt = {
      port: 80
    };
    this.app = express();
    this.options = Object.assign(defaultOpt, options);
    this.setRouter();
  }

  setRouter() {
    let router = new Router(this.app);
    router.setMiddleware(this.app);
    router.setCrypto(this.app);
    router.setRoutes(this.app);
    router.setErrors(this.app);
  }

  run() {
    let chatOpsServer = http.createServer(this.app);
    chatOpsServer.listen(this.options.port, function () {
        logger.info(`ChatOps admin Server started on port ${chatOpsServer.address().port}`);
    });
    return {
      app: this.app,
      server: chatOpsServer
    };
  }
}

module.exports = ProductServer;
