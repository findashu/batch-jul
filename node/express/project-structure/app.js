const express = require('express');
const hbs = require('hbs');
const errorHandler = require('./middlewares/errorHandler');
const appMiddleware = require('./middlewares/appMiddleware');
const routes = require('./routes/index');
const app = express();


app.set('views', __dirname+'/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');


app.use(appMiddleware.logger);
app.use(express.static(__dirname+'/static'));



app.get('/', routes.index);

app.get('/contact', routes.contact)



// HANDLE 404
app.use(errorHandler.pageNotFound);

// HANDLE ERROR
app.use(errorHandler.handleException);




app.listen(3000, () => console.log('Server running on port 3000'))