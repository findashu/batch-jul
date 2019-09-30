const data = require('../data');

module.exports.index = function(req,res) {
    res.render('index', {
        title: 'MyPortfolio - Ashutosh Mishra',
        layout:'layout'
    });
}


module.exports.projectList = function(req,res) {
    console.log(data.myProjects);
    res.render('project-list', {
        title: 'Project Lists ',
        navProject: true,
        projects :data.myProjects
    });
}


module.exports.projectDetail = function(req,res) {

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

module.exports.blogList = function(req,res) {
    res.render('blogs', {
        title:'Blogs',
        navBlog:true
    })
}

module.exports.getLogin = (req,res) => {
    res.render('login', {
        title: 'Login',
        layout:'signin-layout'
    })
}



const users = [{name:'ashu',email:'test@test.com', password:'test'}, {name:'Hello',email:'hello@test.com', password:'1234'}]


module.exports.doLogin = (req,res) => {
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
}

module.exports.getSignup = (req,res) => {
    res.render('signup', {
        title: 'Create an Account',
        layout:'signin-layout'
    })
}

module.exports.doSignup = (req,res) => {
    let body = req.body;

    console.log(body);


    res.redirect('/login');
}

module.exports.admin = (req,res) => {
    console.log(req.session);

    res.render('admin/dashboard', {
        title:'Dashboard',
        layout:'layout-admin'
    })
}


module.exports.contact = (req,res) => {
    res.render('contact', {
        title:'Contact Us',
        navContact:true
    })
}

module.exports.doContact = (req,res) => {
    let body = req.body;

    if(body.name == ''){
        res.status(400).json({message:'Name field is required'});
    }else {
        res.json({'message':'Contact submitted successfully'});
    }
}


module.exports.logout = (req,res) => {
    req.session.isLoggedIn = false;
    req.session.user = '';
    res.redirect('/');
}

module.exports.adminProjects = (req,res) => {
    res.render('admin/projects', {
        title:'Project List',
        layout:'layout-admin',
        projects: data.myProjects
    })
}

module.exports.adminProjectDetail = (req,res) => {
    let alias = req.params.alias;
    let index = data.projectIndex[alias]; 
    res.render('admin/projectDetail', {
        itle:'Project Detail',
        layout:'layout-admin',
        project: data.myProjects[index]
    })
}