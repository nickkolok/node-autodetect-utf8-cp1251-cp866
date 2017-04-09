const autoenc = require('../../autodetect-utf8-cp1251-cp866.js');
const fs = require('fs');
const path = `${__dirname}/../testTexts`;

module.exports.autoenc = autoenc;
module.exports.fs = fs;
module.exports.path = path;
