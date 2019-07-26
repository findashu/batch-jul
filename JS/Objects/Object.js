let obj = {};

let obj2 = new Object();


obj2.name = 'JS';


console.log(obj2);

var person = {
    name:'Bottle',
    color:'blue'
}

var person2 = {};

Object.assign(person2, person);

console.log(person2);

let o1 = {
    name:'ashu',
}

let o2 = {
    name : 'JS',
    age: 26
}


Object.assign(o1, o2);

console.log(o1);

let bottle1 = {
    color: 'blue'
}

let bottle2 = {
    color: 'blue'
}


let bottle3 = bottle1

console.log(bottle1 === bottle2);

console.log(bottle1 === bottle3);


console.log(JSON.stringify(bottle1) === JSON.stringify(bottle2));



let pers = {
    name : "Namrata",
    gender: "Female",
    age : 25,
    hobbies: ['music', 'reading books'],

    bestFriend: {
        name: 'Maria',
        gender: 'Female'
    }
}


let keys = Object.keys(pers);

console.log(keys);


for(let i = 0; i< keys.length; i++) {
    console.log(pers[keys[i]]);


    // console.log(pers.keys[i])
}

Object.keys(pers).forEach(ele => {
    console.log(pers[ele])
});


// for in loop


for (var prop in pers) {

    if(pers.hasOwnProperty(prop)) {
        console.log(prop);
        console.log(pers[prop])
    }
    
}

// for of loop

console.log('Executing for of');

for(let key of Object.keys(pers)) {
    console.log(key, pers[key])
};

// parseInt(val, base);

let n = '12';

let num = parseInt(n);

console.log(typeof num);

console.log(parseInt(0xF, 16));

// parseFloat();

var flt = 13.01

console.log(parseFloat(flt));

console.log(parseInt(flt));

// isFinite

console.log(isFinite(1e309));

// isNaN();

console.log(isNaN('ab12'));