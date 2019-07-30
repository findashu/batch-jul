let today = new Date();


let tm = Date.now();

let td = new Date(tm);


let epch = new Date(0);

console.log(td);

console.log(tm);

console.log(today);


console.log(epch);

let date = today.getDate();

console.log(date);

let month = today.getMonth();

console.log(month);

let year = today.getFullYear();

console.log(year);


let time = today.getTime();

console.log(time);

let t = today.getHours();

console.log(t);


let min = today.getMinutes();

console.log(min);


let de = Date();

let newD = today.setDate(4);

console.log(new Date(newD));


var c = Date.now();

for(var i =0; i< 10000000; i++) {

}

console.log(Date.now() - c);


var userDate = '10/12/2019';

var uD = new Date(userDate);

console.log(uD);