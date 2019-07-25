let primitive = 'Hello World';

console.log(primitive);

console.log(typeof primitive);

let str = new String('Hello JS');

console.log(str)
console.log(typeof str)


console.log(str[0]);

console.log(str.length);

console.log(primitive.length);


console.log(str.valueOf());
console.log(str.toString());



// charAt();
console.log(primitive.charAt(0));

// indexOf();

console.log(primitive.indexOf('o',5))


// substring();

console.log(primitive.substring(1,4));


// concat();

let first = 'Java';

console.log(first.concat('script'));


// split();

let sent = 'Learning Full Stack Development';

console.log(sent.split(' '));


// toLowerCase(), toUpperCase()

console.log(sent.toUpperCase());


let s = 'Hello World of JavaScript';


let nStr = s.split(' ').join('-').toLowerCase();

console.log(nStr);


let newStr = s.toLowerCase().split(' ').map(e => e.charAt(0)).join('-');

console.log(newStr);

// lastIndexOf;


console.log(primitive.lastIndexOf('o'));

// slice();

console.log(primitive.slice(1,-4));