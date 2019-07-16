var obj = {};

console.log(obj);

console.log(typeof obj);


var std1 = {
    math : 60,
    english: 75,
    science : 50,
    history : 45
}

console.log(std1);


// dot notation

console.log(std1.english);

var scoreInMath = std1.math;

console.log(scoreInMath);





var person = {
    name : "Namrata",
    gender: "Female",
    age : 25,
    hobbies: ['music', 'reading books'],

    bestFriend: {
        name: 'Maria',
        gender: 'Female'
    },

    education: [
        {
            name : 'High School',
            passedYear : 2007
        },
        {
            name : 'graduation',
            passedYear: 2015
        }
    ]
}


console.log(person.name);

console.log(person.bestFriend.name);

console.log(person.education[1].passedYear);


// adding a property

person.married = false;

console.log(person);

// update a exiting value
person.name = 'JS';

console.log(person);


// delete a property
delete person.married;
console.log(person);

// Bracket Notation

console.log(person['name'])

console.log(person['bestFriend']['name'])


var std2 = {
    "social science" : 60,
    12: 12
}

console.log(std2["social science"])

console.log(std2['12'])

var query = 'name';

console.log('using bracket notation',person[query]);


console.log(person.query);


var k = 'married';
var value = false;


person[k] = value;

console.log(person.married);





var bottle = {
    color: 'Blue',
    size: 1,
    description : function (cl) {
        console.log('Color is '+cl)
    }
}


console.log(bottle.color)

bottle.description('red');