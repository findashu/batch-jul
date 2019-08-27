const http = require('http');
const fs = require('fs');

let server = http.createServer();


// server.on('request', function(req,res) {
//     fs.readFile(__dirname+'/file.txt' ,function(err, data) {
//         if(err) {
//             console.log(err);
//             res.end('Something went wrong')
//         }else {
//             res.end(data);
//         }
//     })
// });

server.on('request', function(req,res) {
   let readStream =  fs.createReadStream(__dirname+'/file.txt');

    readStream.pipe(res);


});


server.listen(3005, () => console.log('Server up n running'))