module.exports.index = function(req,res) {
    res.render('index', {
        title: 'MyPortfolio - Ashutosh Mishra',
        layout:'layout'
    });
}


module.exports.projectList = function(req,res) {
    res.render('project-list', {
        title: 'Project Lists '
    });
}


module.exports.projectDetail = function(req,res) {

    let alias = req.params.alias;
    console.log(alias)

    res.render('project-detail', {
        title:'Project Detail'
    })
}