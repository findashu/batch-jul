const express = require('express');
const app = express();
const fs = require('fs');
// parse body data
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// app level middleware
function logger(req,res,next) {
    console.log(req.method, req.url);
    next();
}

app.use(logger);

function rootMiddleware(req,res,next){
    console.log('This is root route');
    next();
}

app.get('/', rootMiddleware, function(req,res,next) {

    let dt = req.query;
    console.log(dt)
    fs.readFile(__dirname+'/views/index.html', {encoding:'utf8'}, function(err, data) {
        if(err) {
            next(err)
        }else {
            res.write(data);
            res.end();
        }
    })
});


app.get('/contact', function(req,res) {


    let name = req.query.name;

    console.log(name);


    fs.readFile(__dirname+'/views/contact.html', {encoding:'utf8'}, function(err, data) {
        if(err) {
            res.send('Something went wrong '+ err.message);
        }else {
            res.write(data);
            res.end();
        }
    })
});


app.post('/contact', function(req,res) {
    let data = req.body;
    console.log(data);
    
    res.status(200).write('Thanks for contacting '+ data.name);
    res.end()
});


app.put('/test-put', function(req,res) {
    let dt = req.body;

    console.log(dt);

    res.send('Test put success')

})

app.patch('/test-patch', function(req,res) {
    console.log(req.body);
    res.send('TEST PATCH SUCCESS');

});


app.delete('/test-delete', function(req,res) {

    res.send('TEST DELETE SUCCESS')
})

app.get('/products/all', function(req,res) {
    res.send('All Products')
})

app.get('/products/:product', function (req,res) {

    console.log(req.params);

    let product = req.params.product
    
    console.log(product);

    res.send('Hello '+product);

});


app.get('/user-profile', function(req,res) {

    res.send('Hello User')
});


app.use(function(req,res) {
    res.status(404).send('Page not found');
})

app.use(function(err, req,res,next) {
    console.log(err);
    res.status(500).send('Something went wrong')
})



app.listen(3000, () => console.log('Server up n running'));