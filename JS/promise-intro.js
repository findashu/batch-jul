// function add (a,b,cb) {
//     if(typeof a == 'number' && typeof b == 'number') {
//         let addition = a+b;
//         return cb(null, addition);
//     }else {
//         return cb('Pass a number', null)
//     }
// }

// function square(n,cb) {
//     if(typeof n == 'number') {
//         return cb(null,n*n);
//     }else {
//         return cb('Square function accepts a number', null);
//     }
// }

// add(2,3, function(err, data) {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log('addition data',data);
//         square(data, function(err,sqData) {
//             if(err) {
//                 console.log('Squre err', err)
//             }else {
                
//                 square(sqData, function(err, dblSq) {
//                     if(err) {
//                         console.log('err')
//                     }else {
//                         console.log(dblSq);
//                     }
//                 })
//             }
//         })
//     }
// });


function add (a,b) {
    return new Promise(function(resolve, reject) {
        if(typeof a == 'number' && typeof b == 'number'){
            let addition = a+b;
            resolve(addition);
        }else {
            reject(new Error('Add function accepts a number'))
        }
    })
};


function square(n) {
    return new Promise(function(resolve, reject) {
        if(typeof n == 'number'){
            resolve(n*n)
        }else {
            reject(new Error('Square accepts a number'))
        }
    })
}


// add(2,3)
//     .then(d => console.log('add then block', d))
//     .catch(err => console.log(err))

add(2,3)
    .then(function(data) {
        return square(data);
    })
    .then(sqd => console.log(sqd))
    .catch(err => console.log(err));




// add(2,4)
//     .then(d => console.log(d))
//     .catch(err => console.log(err))

// square(2)
//     .then(d => console.log(d))
//     .catch(err => console.log(err))

// async await

Promise.all([add(2,3),square(5)])
    .then(data => console.log('Promise all',data))
    .catch(err => console.log(err))