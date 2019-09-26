const express = require('express');
const hbs = require('hbs');
const session = require('express-session');
hbs.registerPartials(__dirname+'/views/partials')

const errorHandler = require('./middlewares/errorHandler');
const appMiddleware = require('./middlewares/appmiddleware');
const routes = require('./routes/index')

const app = express();


// not getting
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

app.get('/', routes.index);

app.get('/projects', routes.projectList);
app.get('/blogs', routes.blogList);
app.get('/login', routes.getLogin);
app.post('/login', routes.doLogin);
app.get('/signup', routes.getSignup);
app.post('/signup', routes.doSignup);
app.get('/contact', routes.contact);
app.post('/contact', routes.doContact);


app.get('/admin', appMiddleware.authenticate, routes.admin)

app.get('/projects/:alias', routes.projectDetail)


app.use(errorHandler.notFound);
app.use(errorHandler.handleError);

app.listen(3000, () => console.log('Server started on port 3000'));