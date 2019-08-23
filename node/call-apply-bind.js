let fruit = {
    name: 'mango',
    quantity: 5
   
}

let fruit2 = {
    name: 'apple',
    quantity: 4
}

let fruit3 = {
    name: 'orange',
    quantity: 6
}

function description(name,last) {
    console.log(`${name} has ${this.quantity} ${this.name} remaining`);
}

// console.log(fruit.description());


// call() pass the context to function

description.call(fruit,'ashu');

description.call(fruit2,'JS');


// apply();


description.apply(fruit3, ['ashu','hello'])


// bind();
// bind won't execute function but returns tht with the context provided.


let des = description.bind(fruit,['Javascript']);

des();


function foo(a,b,c) {
    console.log(arguments.length);

    // won't work
    // arguments.push(6) 
    Array.prototype.push.call(arguments,67);

    console.log(arguments);
}

foo(1,2,4)