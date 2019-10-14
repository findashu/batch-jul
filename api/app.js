const express = require('express');
const mongoose = require('mongoose');
const appMiddleware = require('./middlewares/appMiddleware')
const errorHandler = require('./middlewares/errorHandle')
const app = express();

const projectRoutes = require('./server/projects/projectController');


mongoose.connect('mongodb://localhost:27017/mypofo-app',{useNewUrlParser:true, useUnifiedTopology:true})
    .then(d => console.log('Connected with DB'))
    .catch(err => console.log('DB Connection Error', err));

app.use(appMiddleware.logger);
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get('/', (req,res) => res.json({message:'API up n running'}))

app.use('/projects',projectRoutes);


app.use(errorHandler.notFound);
app.use(errorHandler.handleException);


app.listen(3005, () => console.log('API up n running on port 3005'));