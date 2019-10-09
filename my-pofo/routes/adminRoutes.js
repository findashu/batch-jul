const router = require('express').Router();
const Project = require('../models/projectSchema');
const ProjectService = require('../services/projectService')

router.get('/dashboard', (req, res) => {
    console.log(req.session);

    res.render('admin/dashboard', {
        title: 'Dashboard',
        layout: 'layout-admin'
    })
});


router.get('/projects', (req, res, next) => {

    // Project.find().countDocuments(function(err, count) {
    //     console.log('Count is ',count)
    //     if(err) {

    //     }else {
    //         Project.find(function(err, data) {
    //             if(err){

    //             }else {
    //                 console.log(data)
    //                 res.render('admin/projects', {
    //                     title:'Project List',
    //                     layout:'layout-admin',
    //                     projects: data,
    //                     count: count
    //                 })
    //             }
    //         })
    //     }
    // })

    // Project.find().countDocuments().then(count => {
    //     Project.find().then(projects => {
    //         res.render('admin/projects', {
    //             title:'Project List',
    //             layout:'layout-admin',
    //             projects: data,
    //             count: count
    //         })
    //     }).catch(err => next(err))
    // }).catch(err => next(err))    


    ProjectService.projectList().then(dt => {
        res.render('admin/projects', {
            title: 'Project List',
            layout: 'layout-admin',
            projects: dt
        })
    }).catch(err => next(err));
});

router.get('/projects/create', (req, res) => {
    res.render('admin/createProject', {
        title: 'Create Project',
        layout: 'layout-admin'
    })
})


router.post('/projects/create', (req, res, next) => {
    let bodyData = req.body;

    bodyData.alias = bodyData.name.split(' ').join('-').toLowerCase();
    let tgsArray = bodyData.tags.split(',');
    let classes = ['primary', 'secondary', 'danger', 'success'];

    let fT = [];

    tgsArray.forEach((ele, i) => {
        let d = {
            name: ele,
            class: classes[i]
        }
        fT.push(d)
    })
    bodyData.tags = fT || [];

    let newProject = new Project(bodyData);

    console.log(newProject);

    newProject.save().then(data => {
        console.log(data)
        res.redirect('/admin/projects')
    }).catch(err => next(err));
});


router.get('/projects/:alias', (req, res,next) => {
    let alias = req.params.alias;
   
    ProjectService.getProject(alias).then(project => {
        res.render('admin/projectDetail', {
            title: 'Project Detail',
            layout: 'layout-admin',
            project: project
        })
    }).catch(err => next(err))    
})


router.get('/projects/:alias/delete', (req,res,next) => {
    let alias = req.params.alias;
    ProjectService.deleteProject(alias).then(dt => {
        res.redirect('/admin/projects')
    }).catch(err => next(err));
})

module.exports = router;