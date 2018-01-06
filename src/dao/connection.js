const mysql  = require('mysql');

let queryFunc = function (sql) {
    return new Promise(function(resolve, reject) {
        let connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'root',
            port: '3306',
            database: 'project',
        });
        connection.connect();
        connection.query(sql, function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return reject(err);
            }
            console.log('--------------------------SELECT----------------------------');
            console.log(result);
            console.log('------------------------------------------------------------\n\n');
            resolve(result);
        });
        connection.end();
    });
};

module.exports = queryFunc;
