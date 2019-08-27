const url = require('url');

let uri = 'http://www.myweb.com/contact?name=hello&last=hii';

let parsedUrl = url.parse(uri,true);

console.log(parsedUrl);