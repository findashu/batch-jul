function Person (name, gender) {
    this.name = name;
    this.gender = gender;
}


var js = new Person('Javascript', 'male');

var ashu = new Person('AShutosh', 'Male');

var vinod = Person('Vinod', 'Male');

console.log(js);

console.log(ashu);

console.log(vinod);

js.graduate = true;


console.log(js.graduate);

console.log(ashu.graduate);



// function properties

console.log(Person.length);

console.log(Person.constructor);

console.log(Person.prototype);

Person.isFn = true;

console.log('Person property',Person.isFn);


console.log(typeof Person.prototype);


Person.prototype.age = 25;

console.log(Person.prototype);


console.log(js.age);

console.log(ashu.age);


console.log(js.constructor);

console.log(ashu.constructor);

console.log(js.hasOwnProperty('name'))


console.log(ashu.hasOwnProperty('gender'));


console.log(ashu.hasOwnProperty('age'));


console.log(ashu.constructor.prototype.hasOwnProperty('age'));


var str = js.age.toString();

console.log(typeof str);


console.log(Person.constructor.prototype.hasOwnProperty('age'));



console.log(js.hasOwnProperty('toString'));

console.log(Person.toString);


console.log(js.constructor.prototype.hasOwnProperty('toString'))



console.log(Object.hasOwnProperty('toString'));

console.log(Object.constructor.prototype.hasOwnProperty('toString'));



var obj = {};


var obj2 = new Object();


console.log(obj2.constructor);

console.log(obj.constructor.prototype);


var arr = [1,2,3,4];


var arr2 = new Array();


Array.prototype.push = function() {
    return 'Hello'
}


Array.prototype.add = function() {
    console.log('our add',this);
    var res = 0;
    for(var i =0; i < this.length; i++){
        res += this[i];
    }

    return res;

}


console.log(arr2.push());

console.log(typeof arr);

console.log(arr2.constructor);

console.log(arr2);


console.log(arr.add())


var newArr = new Array(1,2,3);

console.log(newArr.add());


// property of Obj instance
console.log(js.__proto__);

// property of constructor function
console.log(js.prototype);

console.log(js.constructor.prototype)

