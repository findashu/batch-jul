const fs = require('fs');

let readStream = fs.createReadStream(__dirname+'/inpt.txt');

readStream.setEncoding('utf8');

let writeStream = fs.createWriteStream(__dirname+'/piping.txt', {encoding:'utf8'});


readStream.pipe(writeStream);