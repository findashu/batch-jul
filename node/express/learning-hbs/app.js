const express = require('express');
const hbs = require('hbs');
const app = express();


// setup view and view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials')

let products = [{
    name: 'Mobile',
    price: 225,
    rating: 4.6,
    description: 'Good Product'
},
{
    name: 'Laptop',
    price: 225,
    rating: 4.6,
    description: 'Good Product'
},
{
    name: 'Charger',
    price: 225,
    rating: 4.6,
    description: 'Good Product'
},
{
    name: 'HeadPhone',
    price: 225,
    rating: 4.6,
    description: 'Good Product'
},
{
    name: 'Mouse',
    price: 225,
    rating: 4.6,
    description: 'Good Product'
},
{
    name: 'Umbrella',
    price: 225,
    rating: 4.6,
    description: 'Good Product'
},
{
    name: 'RAM',
    price: 225,
    rating: 4.6,
    description: 'Good Product'
},
{
    name: 'HeadPhone',
    price: 225,
    rating: 4.6,
    description: 'Good Product'
},
{
    name: 'Watch',
    price: 225,
    rating: 4.6,
    description: 'Good Product'
}]

app.get('/', (req, res) => {


    
    res.render('index', {
        name: 'Joe',
        fullName: '<p>Ashutosh Mishra </p>',
        product: {
            name: 'Headphone',
            price: 125,
            rating: 4.5
        },
        hobbies: ['Football', 'Music', 'Travelling'],

        userName: '',
        productList: products

    })
})



app.listen(3000, () => console.log('Server up n running on port 3000'));


