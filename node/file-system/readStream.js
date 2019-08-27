const fs = require('fs');

let readerStream = fs.createReadStream(__dirname+'/inpt.txt');


readerStream.setEncoding('utf8');


let data = '';


readerStream.on('data', function(chunk) {
    console.log('chunk', chunk)
    data += chunk;
});


readerStream.on('error', function(err) {
    console.log(err);
});

readerStream.on('end', function() {
    console.log('Done reading');
    console.log(data);
});