const calc = {};
calc.add = function(a,b) {
    return a+b;
}

function square(n) {
    console.log(n*n);
}

let temp = 28;

module.exports.calc = calc;
module.exports.square = square;


// console.log(module.exports);