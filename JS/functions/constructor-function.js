// 

function Person (name, age) {
    // console.log(this)

    this.name = name;
    this.age = age;

    this.description = function() {
        console.log(this.name)
    }
    return 
}

var n = Person('shs',23);

console.log('Call as fnction', n);

var p = new Person('ashu',27);

var js = new Person('js',20)

p.gender = 'Male';

console.log(p);

console.log(js);

p.description();

console.log(p.name);

console.log(Person.length);


console.log(Person.constructor);


Person.myProp = 'My property';

console.log(Person.myProp);

console.log(Person.prototype);
console.log(typeof Person.prototype);

