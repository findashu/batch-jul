let obj = {
    name : "Namrata",
    gender: "Female",
    age : 25,
    hobbies: ['music', 'reading books'],

    bestFriend: {
        name: 'Maria',
        gender: 'Female'
    }
}


// let name = obj.name

// console.log(name);


// Object Destructuring


let {name: myName, age} = obj;

console.log(myName);

console.log(age);

var book = "You don't know JS";

let b = {
    name : 'Hello',
    book,

    description() {
        console.log('Hello')
    }
}

console.log(b);

// Array Destructuring

let arr = [100,200,300,400,600];

// let firstEle = arr[0];

let [firstEle,,thirdEle] = arr;

console.log(firstEle);

console.log(thirdEle);

// Spread and REST operator

let max = Math.max(...arr);
// Math.max(100,200,300,400)

console.log(max);


function sum(...n) {
    console.log(n)
}

sum(100,200,300);