var arr = [1,2,3,4,5,6,7];


var arr2 = new Array(1,2,3);

console.log(arr2);

var newArr = new Array(5);

console.log(newArr);


// push();

arr2.push(34);
console.log(arr2);

// pop();

arr2.pop();

console.log(arr2);

// unshift();

arr2.unshift(25);

console.log(arr2);

// shift

arr2.shift();
console.log(arr2);


// slice();

console.log(arr)

var sliced = arr.slice(1,3);

console.log(sliced);

// splice


arr.splice(1,3,'a','b','c');

console.log(arr)


// sort

var unsorted = [5,8,3,6,2,9];

var sorted = unsorted.sort();

console.log(sorted);

var uns = [11,7,2,55,3];

var s = uns.sort();

console.log(s);

// join()

var names = ['a','s','h','u'];

console.log(names.join(''));