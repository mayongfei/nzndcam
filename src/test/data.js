
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
const loginEnv = {
    LOGIN_SERVER_PORT: '3100',
    HUBOT_SERVER_PORT: '3100',
    HUBOT_SERVER_HOSTNAME: '192.168.0.4'
};

module.exports = {
    slackEnv,
    mattermostEnv,
    msteamsEnv,
    loginEnv
};