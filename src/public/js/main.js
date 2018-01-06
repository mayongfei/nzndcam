var defaultData = {
    slack: {
        slack: '',
        HUBOT_NAME: '',
        HUBOT_REST_API_USERNAME: '',
        HUBOT_REST_API_PASSWORD: '',
        HUBOT_UNIFIED_SERVER_PORT: '',
        HUBOT_LOGIN_SERVER_ENDPORT: '',
        HUBOT_SLACK_APP_CLIENT_ID: '',
        HUBOT_SLACK_APP_SECRET: '',
        HUBOT_SLACK_OAUTH2_WEBSERVER_HOSTNAME: '',
        HUBOT_SLACK_OAUTH2_WEBSERVER_PORT: '',
        HUBOT_SLACK_APP_TEAM_NAME: '',
        HUBOT_SLACK_APP_TEAM_USERNAME: '',
        HUBOT_SLACK_APP_TEAM_USERPASS: '',
        HUBOT_SLACK_OAUTH2_DELAY: '',
        HUBOT_SLACK_OAUTH2_AUTOMATION_TIMEOUT: '',
        IDM_AUTH_RETURN_ENDPORT: '',
        HTTP_PROXY: '',
        HUBOT_SCRIPTS: ''
    },
    mattermost: {
        mattermost: '',
        HUBOT_NAME: '',
        HUBOT_REST_API_USERNAME: '',
        HUBOT_REST_API_PASSWORD: '',
        HUBOT_UNIFIED_SERVER_PORT: '',
        HUBOT_LOGIN_SERVER_ENDPORT: '',
        MATTERMOST_HOST: '',
        MATTERMOST_HTTP_PORT: '',
        MATTERMOST_WSS_PORT: '',
        MATTERMOST_GROUP: '',
        MATTERMOST_USER: '',
        MATTERMOST_PASSWORD: '',
        MATTERMOST_USE_TLS: '',
        MATTERMOST_TLS_VERIFY: '',
        IDM_AUTH_RETURN_ENDPORT: '',
        HUBOT_SCRIPTS: ''
    },
    msteams: {
        msteams: '',
        HUBOT_NAME: '',
        HUBOT_REST_API_USERNAME: '',
        HUBOT_REST_API_PASSWORD: '',
        HUBOT_UNIFIED_SERVER_PORT: '',
        HUBOT_LOGIN_SERVER_ENDPORT: '',
        MICROSOFT_APP_ID: '',
        MICROSOFT_APP_PASSWORD: '',
        MICROSOFT_AUTH_SERVER_HOST: '',
        MICROSOFT_TENANT_ID: '',
        HTTP_PROXY_ENDPOINT: '',
        HUBOT_SCRIPTS: ''
    },
    login: {
        LOGIN_SERVER_PORT: '',
        HUBOT_SERVER_PORT: '',
        HUBOT_SERVER_HOSTNAME: ''
    }
};
var selectVars = [
    {
        title: 'mattermost',
        id: 'mattermost',
        name: 'mattermost',
        type: 'radio',
        value: 'mattermost',
        des: 'The purpose of a collaboration tool is to support a group of two or more individuals to accomplish a common goal.'
    },
    {
        title: 'slack',
        id: 'slack',
        name: 'slack',
        type: 'radio',
        value: 'slack',
        des: 'The purpose of a collaboration tool is to support a group of two or more individuals to accomplish a common goal.'
    },
    {
        title: 'msteams',
        id: 'msteams',
        name: 'msteams',
        type: 'radio',
        value: 'msteams',
        des: 'The purpose of a collaboration tool is to support a group of two or more individuals to accomplish a common goal.'
    }
];

var passwords = [
    'HUBOT_REST_API_PASSWORD',
    'MATTERMOST_PASSWORD',
    'HUBOT_SLACK_APP_TEAM_USERPASS',
    'MICROSOFT_APP_PASSWORD'
];
var pushEnvVars = function(obj, defaultObj, passwords) {
    let platforms = ['mattermost','slack','msteams'];
    let envVars = [];
    let item, title, name, value, type, id;
    for(var key in defaultObj){
        name = key;
        if(passwords.indexOf(key) !== -1){
            type = 'password';
        }else if(platforms.indexOf(key) !== -1){
            continue;
        }else {
            type = 'text';
        }
        title = name
            .split('_')
            .map(function (item) {
                return item.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
            })
            .join(" ");
        id = name
            .split('_')
            .map(function (item, i) {
                if(i == 0){
                    return item.toLowerCase();
                }else {
                    return item.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
                }
            })
            .join("");
        if(obj && obj[key]){
            value = obj[key];
        }else {
            value = defaultObj[key];
        }
        item = {id: id, title: title, name: name, value: value, type: type};
        envVars.push(item);
    }
    return envVars;
};
var getVaultData = function (data, defaultData, passwords) {
    var vaultData = {};
    for(var key in defaultData){
        vaultData[key] = pushEnvVars(data[key], defaultData[key], passwords);
    }
    return vaultData;
};

var arrayContains = function(arr, obj) {
    let i = arr.length;
    while (i--) {
        if (arr[i] === obj) {
            return true;
        }
    }
    return false;
};

var submitDate = function (data) {
    var ajaxTimeout = $.ajax({
        type: "POST",
        url: $("#configBotForm")[0].action,
        timeout : 30000,
        data: {data: JSON.stringify(data)},
        success: function(data){
            if(data){
                if(data.status == 200){
                    alert('successfully');
                }
            }
            window.location.href = '/chatops-config';
        },
        error: function(data){
            alert('Submit failed');
        },
        complete : function(XMLHttpRequest, status){
            if(status == 'timeout'){
                alert('Submit timeout');
                ajaxTimeout.abort();
            }
        }
    });
};
