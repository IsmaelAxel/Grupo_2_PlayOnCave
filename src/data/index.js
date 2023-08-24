const {readFileSync, writeFileSync} = require('fs');
const path = require('path');

module.exports = {
    readJSON : (json) => JSON.parse(readFileSync(path.resolve(__dirname, json),'utf-8')),
    writeJSON : (array, json) => writeFileSync(path.resolve(__dirname, json), JSON.stringify(array, null , 3 ))
}