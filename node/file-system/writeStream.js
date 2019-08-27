const fs = require('fs');


let data = 'Writing using a writerstream'

let writerStream = fs.createWriteStream(__dirname+'/data.txt', {encoding:'utf8',autoClose:true});


writerStream.write(data);


writerStream.on('finish', function() {
    console.log('Writing completed')
});


writerStream.on('error', function(err) {
    console.log(err)
});