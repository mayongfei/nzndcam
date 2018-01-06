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
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('winston');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const {
  ROUTER_URIS
} = require('./constants');

class Router {

  constructor(app) {
    this.routeDir = `${__dirname}/routes`;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser('chatops-config'));
    //app.use(express.static(path.join(__dirname + '/../', 'public')));
    app.use(express.static(path.join(__dirname + '/../', 'public')));
    app.set('views', path.join(__dirname + '/../', 'views'));
    app.engine('html', ejs.__express);
    app.set('view engine', 'html');
  }

  setMiddleware(app) {
    app.use(function (req, res, next) {
      logger.info('Request time:', new Date());
      logger.info('Request Type:', req.method);
      logger.info('Request URL:', req.originalUrl);
      next();
    });
  }

  setCrypto(app) {

  }

  setRoutes(app) {
    logger.info('Start load routers ...');
    let files = fs.readdirSync(this.routeDir);

    let js_files = files.filter(function (file) {
      return file.endsWith('.js');
    });

    js_files.forEach((file) => {
      let filePath = `${this.routeDir}/${file}`;
      let route = require(filePath);
      logger.info(`Load router file: ${filePath}`);
      app.use(route.routeUri, route.route);
    });

    logger.info('Load routers end ...');
  }

  setErrors(app) {
    app.use((err, req, res, next) => {
      logger.error('ChatOps admin server error: ', err);
      res.status(err.status || 500);
      res.json({code:'fail'});
    });
  }
}

module.exports = Router;
