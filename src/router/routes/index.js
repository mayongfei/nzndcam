const express= require('express');
const router = express.Router();
const queryFunc = require('../../dao/connection');
const {
    ROUTER_URIS
} = require('../constants');

router.get('/', function (req, res) {
    queryFunc("select * from product")
    .then((products) => {
        res.render('index', {
            products: JSON.stringify(products)
        });
    }).catch((err) => {
        console.log(err);
    });
});

router.get('/health-status', function (req, res) {
    res.json({code: 'ok'});
});

module.exports = {
  routeUri: ROUTER_URIS.INDEX,
  route: router
};
