// Fat Arrow Function

var add = function (a,b) {
    return a+b;
}


// var addition = (a,b) => {
//     return a+b;
// }

var addition = (a,b) =>  a+b;

var square = b => b*b;


console.log(addition(1,2));

var sq = square(6)

console.log(square(5))

console.log(sq)


var fn = () => console.log('Hello');

fn();

fn();