const express= require('express');
const router = express.Router();
const queryFunc = require('../../dao/connection');
const {
    ROUTER_URIS
} = require('../constants');
const {
    slackEnv,
    mattermostEnv,
    msteamsEnv,
    loginEnv
} = require('../../testData');

router.post('/', function (req, res) {
    let data = req.body.data;
    let info = JSON.parse(data);
    console.log("======================================");
    console.log(info);
    res.send('Successfully');
});

router.get('/', function (req, res) {
    let vaultData = {};
    vaultData.slack = slackEnv;
    vaultData.mattermost = mattermostEnv;
    vaultData.msteams = msteamsEnv;
    vaultData.login = loginEnv;
    console.log(vaultData);
    console.log("successfully get the secret");

    let obj = JSON.stringify({
        name:'pit',
        age:20,
        array: ['pit','name']
    });

    res.render('configuration', {
        vaultData: JSON.stringify(vaultData)
    });
});

router.get('/:productId', function (req, res) {
    console.log("req.params.productId: " + req.params.productId);
    queryFunc("select * from product where id = " + req.params.productId)
    .then((product) => {
        res.render('product', {
            product: JSON.stringify(product[0])
        });
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = {
  routeUri: ROUTER_URIS.PRODUCT,
  route: router
};
