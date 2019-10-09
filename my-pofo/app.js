const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const session = require('express-session');
hbs.registerPartials(__dirname+'/views/partials');
const errorHandler = require('./middlewares/errorHandler');
const appMiddleware = require('./middlewares/appmiddleware');
const publicRoutes = require('./routes/index');
const adminRouter = require('./routes/adminRoutes');

const app = express();


mongoose.connect('mongodb://localhost:27017/mypofo-app',{useNewUrlParser:true, useUnifiedTopology:true})
    .then(d => console.log('Connected with DB'))
    .catch(err => console.log('DB Connection Error', err));


app.set('view engine', 'hbs');
app.set('views', __dirname+'/views');

app.use(express.static(__dirname+'/static'));

app.use(session({
    secret:'my secret',
    saveUninitialized: false,
    resave:false,
    cookie: {maxAge:1000000}
}));


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(appMiddleware.logger);
app.use(appMiddleware.authenticated);


app.use('/', publicRoutes)

app.use('/admin',appMiddleware.authenticate, adminRouter )


app.use(errorHandler.notFound);
app.use(errorHandler.handleError);

app.listen(3000, () => console.log('Server started on port 3000'));