const express = require('express');
const hbs = require('hbs');
hbs.registerPartials(__dirname+'/views/partials')

const errorHandler = require('./middlewares/errorHandler');
const appMiddleware = require('./middlewares/appmiddleware');
const routes = require('./routes/index')

const app = express();


// not getting
app.set('view engine', 'hbs');
app.set('views', __dirname+'/views');

app.use(express.static(__dirname+'/static'));

app.use(appMiddleware.logger);

app.get('/', routes.index);

app.get('/projects', routes.projectList);

app.get('/projects/:alias', routes.projectDetail)


app.use(errorHandler.notFound);
app.use(errorHandler.handleError);

app.listen(3000, () => console.log('Server started on port 3000'));