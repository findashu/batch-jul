// import whole exports object

const moduleOne = require('./module-one');

// import just square function
const sq = require('./module-one').square;

console.log(moduleOne);


console.log(sq(2));


console.log(module.exports);

