
module.exports.pageNotFound = function (req,res,next) {
    res.status(404).send('Page not found');
}


module.exports.handleException = function(err,req,res,next) {
    console.log(err);
    res.status(500).send('Something went wrong');
}