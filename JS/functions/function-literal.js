sum();

// function Literal

var foo = function () {
    console.log('Literal Notation')
}


function sum() {
    console.log('add fun')
}



foo();


var add = function (a,b) {
    return a+b;
}

console.log(add(1,2));


// Use Cases of Anonymous Function


// 1. Self Executing Function

(function (a,b) {
    console.log(a);
    console.log(b);
    console.log('Anonymous Function')
})(1,2);


// 2 Callbacks


// function substract (x,y) {
//     return x-y;
// }

function square (a) {
    return a*a;
} 


// var sub = substract(10,5);

// var sq = square(sub);

// console.log(sq);


function substract (x,y,cb) {
    if(typeof x == 'number' && typeof y == 'number'){
        return cb(x-y)
    }else {
        return 'Please pass a number'
    }
};


var rs = substract(10,5, square);

console.log(rs);

