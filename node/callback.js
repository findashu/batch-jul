function square(num, cb) {
    if(typeof num !== 'number'){
        cb('Pass a number', null)
    }else {
        cb(null, num*num);
    }
}


square('12', function(err, data) {
    if(err) {
        console.log(err);
    }else {
        console.log(data);
    }
});