

var a = 10;


if (true) {
    var b = 20;
}


console.log(a);

console.log(b);
foo(2,3)

function foo (x,y) {
    var insideFun = 30;

    faa = 30;
    console.log('parameter value',x);
    console.log('global a',a)
    return insideFun;
}

console.log('value of faa', faa)


// console.log(x);

// console.log(insideFun)


console.log(js);


var js = 20;

console.log(js);


// ES6 const let

const PI = 3.14;

console.log(PI);

// PI = 3.14333;

const obj = {
    name:'JS',
    version:'ES6'
}

obj.name = 'Javascript';

var obj2 = {
    n:'hello'
}

// obj = obj2;

console.log(obj);


// let Keyword

let v = 20;

console.log('value of v', v);


if(true) {
    let g = 123;
}

// console.log(g);




let xyz = 30;

let yz = 20;

function fun () {
    console.log('value of yz', yz)
    console.log(xyz);
    let xyz = 20;
    console.log(xyz)
}

fun();