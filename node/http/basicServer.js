const http = require('http');
const url = require('url');



let server = http.createServer(function(req,res) {
    // console.log(req);
    
    console.log(req.method, req.url)
    // console.log(req);
    if(req.url == '/') {
        res.end('Welcome to home page')
    }else if (req.url == '/about'){
        res.end('THis is about page')
    }else {
        res.end('Page not found');
    }


});



server.listen(3000, (err) => {
    if(err) console.log(err);
    console.log('Server is up n running')
})