
module.exports.index = function(req,res) {
    res.render('index', {
        name:'Ashutosh',
        desc: '<p>Hello I am software engineer</p>'
    })
}


module.exports.contact = function(req,res) {
    res.render('contact', {
        layout:'layout'
    })
}