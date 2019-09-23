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

module.exports.doLogin = (req,res) => {
    let body = req.body;
    console.log(body);
    res.redirect('/');
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