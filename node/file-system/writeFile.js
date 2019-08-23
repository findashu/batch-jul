const fs = require('fs');

// synchronous
// fs.writeFileSync(__dirname+'/inpt.txt', 'Hello Der!', {encoding:'utf8'});

let d = 'My name is Ashutosh'

let d2 = 'I m learning programming'

// let data = document.querySelector('input').value


fs.writeFile(__dirname+'/inpt.txt', d2 ,function(err, data) {
    if(err) {
        console.log(err)
    }else {
        console.log('Writing is done!');
    }
});


// appendFile();
// createDir();
// removeDir();
// createFile();
// removeFile()