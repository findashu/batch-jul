module.exports.index = function(req,res) {
    res.render('index', {
        title: 'MyPortfolio - Ashutosh Mishra',
        layout:'layout'
    });
}


module.exports.projectList = function(req,res) {
   
    res.render('project-list', {
        title: 'Project Lists ',
        navProject: true
    });
}


module.exports.projectDetail = function(req,res) {

    let alias = req.params.alias;
    console.log(alias)

    res.render('project-detail', {
        title:'Project Detail',
        navProject: true
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



const users = [{email:'test@test.com', password:'test'}, {email:'hello@test.com', password:'1234'}]


module.exports.doLogin = (req,res) => {
    let body = req.body;

    let usr = users.filter(ele => body.email == ele.email)[0];

    if(usr && usr.password == body.password) {
        console.log(body);
        req.session.user = usr;
        req.session.isLoggedIn = true;


        res.redirect('/admin');
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

    res.render('dashboard', {
        title:'Dashboard'
    })
}