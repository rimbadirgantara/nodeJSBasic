const fs = require('fs');

const writebleStream = fs.createWriteStream('notes.txt');

// tulis 
writebleStream.write('cicak <3 asri');
writebleStream.end();