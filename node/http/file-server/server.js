const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer();

server.on('request', function (req,res) {
    console.log(req.method, req.url);
    let parsedURL = url.parse(req.url, true);

    if(parsedURL.pathname == '/'){
        fs.readFile(__dirname+'/welcome.html', {encoding:'utf8'}, function(err,data) {
            if(err) {
                res.writeHead(500, {'Content-Type':'text/html'});
                res.end('Something went wrong, please try again');
            }else {
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
        })
    }else if(parsedURL.pathname == '/contact' && req.method == 'GET') {
        fs.readFile(__dirname+'/contact.html', {encoding:'utf8'}, function(err,data) {
            if(err) {
                res.writeHead(500, {'Content-Type':'text/html'});
                res.end('Something went wrong, please try again');
            }else {
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
        })
    }else if (parsedURL.pathname == '/contact' && req.method == "POST"){

        req.on('data', function(data) {
            console.log(data);

            let dt = Buffer.from(data).toString();

            console.log(dt)
        });

        req.on('end', function() {
            res.end('Data received successfully');
        })

    }else if(parsedURL.pathname == '/submit'){

        let query = parsedURL.query;

        res.end(`Name : ${query.name} Phone : ${query.phone}`)

    }else {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('Page not found');
    }
});


server.listen(3000, () => console.log('Server running on port 3000'))