const https = require('https');
const fs = require('fs');
const express = require('express');
const logger = require('winston');
const app = express();

const options = {
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem')
};

let server = https.createServer(options, app);
server.listen(8200, () => {
    logger.info("test vault server 8200 start");
});

const slackEnv = {
    slack: 'slack',
    HUBOT_NAME: 'martinbot',
    HUBOT_REST_API_USERNAME: 'martinbot',
    HUBOT_REST_API_PASSWORD: 'admin',
    HUBOT_UNIFIED_SERVER_PORT: '3000',
    HUBOT_LOGIN_SERVER_ENDPORT: 'https://sgdlitvm0141.hpeswlab.net:28443',
    HUBOT_SLACK_APP_CLIENT_ID: '142213818688.145943966950',
    HUBOT_SLACK_APP_SECRET: 'bcf05722348a915571e437a99b91b9df',
    HUBOT_SLACK_OAUTH2_WEBSERVER_HOSTNAME: '16.155.194.99',
    HUBOT_SLACK_OAUTH2_WEBSERVER_PORT: '4000',
    HUBOT_SLACK_APP_TEAM_NAME: 'martinbot',
    HUBOT_SLACK_APP_TEAM_USERNAME: 'yong-feim@hpe.com',
    HUBOT_SLACK_APP_TEAM_USERPASS: 'May151232',
    HUBOT_SLACK_OAUTH2_DELAY: '1000',
    HUBOT_SLACK_OAUTH2_AUTOMATION_TIMEOUT: '300000',
    IDM_AUTH_RETURN_ENDPORT: 'https://shcrachelcdfvm01.hpeswlab.net:5443',
    http_proxy: 'http://web-proxy.il.hpecorp.net:8080'
};

const mattermostEnv = {
    mattermost: 'mattermost',
    HUBOT_NAME: 'martinbot',
    HUBOT_REST_API_USERNAME: 'martinbot',
    HUBOT_REST_API_PASSWORD: 'admin',
    HUBOT_UNIFIED_SERVER_PORT: '3000',
    HUBOT_LOGIN_SERVER_ENDPORT: 'https://sgdlitvm0141.hpeswlab.net:28443',
    MATTERMOST_HOST: 'sgdlitvm0295.hpeswlab.net',
    MATTERMOST_HTTP_PORT: '443',
    MATTERMOST_WSS_PORT: '443',
    MATTERMOST_GROUP: 'mf',
    MATTERMOST_USER: 'bot@bot.com',
    MATTERMOST_PASSWORD: '1Qaz2wsx',
    MATTERMOST_USE_TLS: 'yes',
    MATTERMOST_TLS_VERIFY: 'no',
    IDM_AUTH_RETURN_ENDPORT: 'https://shcrachelcdfvm01.hpeswlab.net:5443'
};
const msteamsEnv = {
    msteams: 'msteams',
    HUBOT_NAME: 'martinbot',
    HUBOT_REST_API_USERNAME: 'martinbot',
    HUBOT_REST_API_PASSWORD: 'admin',
    HUBOT_UNIFIED_SERVER_PORT: '3000',
    HUBOT_LOGIN_SERVER_ENDPORT: 'https://sgdlitvm0141.hpeswlab.net:28443',
    MICROSOFT_APP_ID: '432c0089-1848-4a0f-8b92-48768b09cd2e',
    MICROSOFT_APP_PASSWORD: 'password',
    MICROSOFT_AUTH_SERVER_HOST: 'https://94a48ddb.ngrok.io',
    MICROSOFT_TENANT_ID: '2334164e-12be-4a63-8faf-d0f2fc76ffda',
    HTTP_PROXY_ENDPOINT: 'http://web-proxy.il.hpecorp.net:8080'
};

app.get('/v1/itom/suite/448784bf-d737-7408-b304-d55c0efb5352/chatopsbot/slack', (req, res) => {
    logger.info('vault app receiver the get request slack');
    let result = {
        "request_id":"8416bfa6-6816-cbec-c9d8-1f8bbecaf584",
        "lease_id":"",
        "renewable":false,
        "lease_duration":2764800,
        "data": {"value": JSON.stringify(slackEnv)},
        "wrap_info":null,
        "warnings":null,
        "auth":null
    };
    res.status(200).json(result)
});

app.get('/v1/itom/suite/448784bf-d737-7408-b304-d55c0efb5352/chatopsbot/mattermost', (req, res) => {
    logger.info('vault app receiver the get request mattermost');
    let result = {
        "request_id":"8416bfa6-6816-cbec-c9d8-1f8bbecaf584",
        "lease_id":"",
        "renewable":false,
        "lease_duration":2764800,
        "data": {"value": JSON.stringify(mattermostEnv)},
        "wrap_info":null,
        "warnings":null,
        "auth":null
    };
    res.status(200).json(result);
});


app.get('/v1/itom/suite/448784bf-d737-7408-b304-d55c0efb5352/chatopsbot/msteams', (req, res) => {
    logger.info('vault app receiver the get request msteams');
    let result = {
        "request_id":"8416bfa6-6816-cbec-c9d8-1f8bbecaf584",
        "lease_id":"",
        "renewable":false,
        "lease_duration":2764800,
        "data": {"value": JSON.stringify(msteamsEnv)},
        "wrap_info":null,
        "warnings":null,
        "auth":null
    };
    res.status(200).json(result);
});


app.post('/v1/itom/suite/448784bf-d737-7408-b304-d55c0efb5352/chatopsbot/slack', (req, res) => {
    logger.info('vault app receiver the post request slack');
    res.status(200).send("ok la");
});

