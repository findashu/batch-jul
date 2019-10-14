const multer = require('multer');
const path = require('path');
const fs = require('fs');
const unzip = require('unzip');
const router = require('express').Router();
const ProjectService = require('../services/projectService');
const UploadService = require('../services/upload');

// console.log('pththt', path.join(__dirname, '../static/images/projects'))
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../static/images/projects'))
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname)
      }
});

let upload = multer({storage: storage});

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

    ProjectService.createProject(bodyData).then(dt => {
        res.redirect('/admin/projects')
    }).catch(err => next(err))
    
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
});

router.post('/projects/:alias/update', (req,res,next) => {
    let bodyData = req.body;
    let alias = req.params.alias;
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
    ProjectService.update(alias,bodyData).then(dt => {
        res.redirect('/admin/projects');
    }).catch(err => next(err))

})

router.get('/projects/:alias/upload-img',(req,res) => {
    let alias = req.params.alias;
    res.render('admin/upload', {
        title: 'Upload Image',
        layout: 'layout-admin',
        actionUrl: `/admin/projects/${alias}/upload-img`
    })
});

router.post('/projects/:alias/upload-img', upload.single('img'), (req,res,next) => {
    // console.log(req.file);
    let alias = req.params.alias;
    ProjectService.update(alias, {image:`/images/projects/${req.file.filename}`}).then(dt => {  
        res.redirect('/admin/projects');
    }).catch(err => next(err))
});

router.get('/projects/:alias/upload-demo',(req,res) => {
    let alias = req.params.alias;
    res.render('admin/upload', {
        title: 'Upload Image',
        layout: 'layout-admin',
        actionUrl: `/admin/projects/${alias}/upload-demo`
    })
});

router.post('/projects/:alias/upload-demo', (req,res,next) => {
    let filename = req.params.alias+'.zip';
    let dir = path.join(__dirname, `../static/project-demos/${req.params.alias}`);


    function uploaded(err,sucess) {
        if(err) {
            next(err);
        }else {
            let path = dir+'/'+filename;
            fs.createReadStream(path).pipe(unzip.Extract({ path: dir }));

            fs.unlinkSync(path);

            res.redirect('/admin/projects')
        }
    }

    UploadService.uploadDemo(req,res,filename,dir, uploaded)

})


module.exports = router;