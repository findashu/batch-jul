const data = require('../data');
const router = require('express').Router();
const ProjectService = require('../services/projectService');


router.get('/', function(req,res) {
    res.render('index', {
        title: 'MyPortfolio - Ashutosh Mishra',
        layout:'layout'
    });
})


router.get('/projects', function(req,res,next) {
   
    ProjectService.projectList().then(data => {
        res.render('project-list', {
            title: 'Project Lists ',
            navProject: true,
            projects :data
        });
    }).catch(err => next(err));
})

router.get('/projects/:alias/demo', (req,res) => {
    let alias = req.params.alias;
    res.render('demo', {
        title:'Project Demo',
        layout:'layout-demo',
        alias:alias
    });
})



router.get('/projects/:alias', function(req,res,next) {

    let alias = req.params.alias;
    
    ProjectService.getProject(alias).then(dt => {
        res.render('project-detail', {
            title:'Project Detail',
            navProject: true,
            project: dt
        })
    }).catch(err => next(err))
})

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
