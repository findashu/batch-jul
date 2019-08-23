const fs = require('fs');
const path = require('path');

console.log('Program starts');

let file = path.join(__dirname,'../blocking.js');

// synchronous
// let data = fs.readFileSync(file, {encoding:'utf8'});


// asynchronous way
fs.readFile(file, {encoding:'utf8'}, function(err, data) {

    if(err) {
        console.log(err);
    }else {
        console.log(data)
    }
});



console.log('Program Ends');