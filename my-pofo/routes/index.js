const data = require('../data');
const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;

const dbUrl = 'mongodb://localhost:27017';

let db;


MongoClient.connect(dbUrl, {useNewUrlParser:true,useUnifiedTopology: true}, function(err, client) {
    if(err) {
        console.log('Error connecting with DB',err);
    }else {
        console.log('Connected to Database Server');
        db = client.db('mypofo-app');
    }
})


router.get('/', function(req,res) {

    res.render('index', {
        title: 'MyPortfolio - Ashutosh Mishra',
        layout:'layout'
    });
})


router.get('/projects', function(req,res) {
    console.log(data.myProjects);
    res.render('project-list', {
        title: 'Project Lists ',
        navProject: true,
        projects :data.myProjects
    });
})

router.get('/projects/:alias', function(req,res) {

    let alias = req.params.alias;
    let index = data.projectIndex[alias];   
    // console.log(alias)
    // console.log(data.myProjects[index])
    res.render('project-detail', {
        title:'Project Detail',
        navProject: true,
        project: data.myProjects[index]
    })
}
)




router.get('/blogs', function(req,res) {
    res.render('blogs', {
        title:'Blogs',
        navBlog:true
    })
})

router.get('/login', (req,res) => {
    res.render('login', {
        title: 'Login',
        layout:'signin-layout'
    })
})



const users = [{name:'ashu',email:'test@test.com', password:'test'}, {name:'Hello',email:'hello@test.com', password:'1234'}]


router.post('/login', (req,res) => {
    let body = req.body;
    let usr = users.filter(ele => body.email == ele.email)[0];

    if(usr && usr.password == body.password) {
        console.log(body);
        req.session.user = usr;
        res.locals.user = usr;
        req.session.isLoggedIn = true;


       res.render('admin/dashboard', {
           title:'Dashboard',
           layout:'layout-admin'
       })
    }else {
        res.render('login', {
            title: 'Login',
            layout:'signin-layout',
            error: 'User credentials not correct'
        })
    }
})

router.get('/signup', (req,res) => {
    res.render('signup', {
        title: 'Create an Account',
        layout:'signin-layout'
    })
})

router.post('/signup', (req,res) => {
    let body = req.body;

    console.log(body);


    res.redirect('/login');
})




router.get('/contact', (req,res) => {
    res.render('contact', {
        title:'Contact Us',
        navContact:true
    })
})

router.post('/contact', (req,res) => {
    let body = req.body;

    if(body.name == ''){
        res.status(400).json({message:'Name field is required'});
    }else {
        res.json({'message':'Contact submitted successfully'});
    }
})


router.get('/logout',(req,res) => {
    req.session.isLoggedIn = false;
    req.session.user = '';
    res.redirect('/');
})

module.exports = router;
