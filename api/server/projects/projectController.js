const router = require('express').Router();
const ProjectService = require('./projectService')


router.get('/', (req,res,next) => {
    ProjectService.listProjects().then(data => {
        res.json({message:'Project List', data: data})
    }).catch(err => next(err))
})


router.post('/', (req,res,next) => {
    let bodyData = req.body;

    console.log(bodyData)
    bodyData.alias = bodyData.name.split(' ').join('-').toLowerCase();

    ProjectService.createProject(bodyData).then(dt => {
        res.status(201).json({message:'Project created successfully', data:dt})
    }).catch(err => next(err))
});


router.get('/:alias', (req,res,next) => {
    let alias = req.params.alias;

    ProjectService.getProjectByAlias(alias).then(dt => {

        if(dt) {
            res.json({message:'Project found',data:dt} )
        }else {
            res.json({message:`Project with ${alias} not found`})
        }

        
    }).catch(err => next(err))
})


router.delete('/:alias', (req,res,next) => {
    let alias = req.params.alias;

    ProjectService.deleteProject(alias).then(dt => {
        res.json({message:'Project deleted successfully', data:dt});
    }).catch(err => next(err))

});


router.put('/:alias', (req,res,next) => {
    let alias = req.params.alias;
    let bodyData = req.body;

    ProjectService.updateProject(alias,bodyData).then(dt => {
        res.json({message:'Project updated successfully', data:dt})
    }).catch(err => next(err));
})

module.exports = router;