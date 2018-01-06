
const fs = require('fs');
const mkp = require('mkdirp');

let checkPathAndCreate = (dirpath) => {
    if (!fs.existsSync(dirpath));
        mkp.sync(dirpath);
};

let removeFile = (filePath) => {
    fs.unlinkSync(filePath);
};

module.exports = {
    checkPathAndCreate,
    removeFile
};
