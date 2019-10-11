const fs = require('fs');
const multer = require('multer');

module.exports.uploadDemo = (req,res,filename, dir, cb) => {
    try {
        fs.mkdirSync(dir);
    } catch (error) {
        console.log(err);
    }

    let storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, dir)
        },
        filename: function (req, file, cb) {
            cb(null, filename)
        }
    });

    let upload = multer({storage:storage}).single('img');

    upload(req,res, function(err,s) {
        if(err){
            console.log(err);
            cb(err,null)
        }else {
            console.log('uploaded successfully');
            cb(null, s)
        }
    })

}