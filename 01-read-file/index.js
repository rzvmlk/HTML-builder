const fs = require('fs');
const path = require('path');

const absPath = path.join( __dirname, './text.txt');
const input = fs.createReadStream(absPath);
input.pipe(process.stdout);


