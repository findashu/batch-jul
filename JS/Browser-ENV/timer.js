// setTimeout(cb, time(in ms));

console.log('Program started');


function greet() {
    alert('Hello, How are you')
    
}


// setTimeout(function() {
//     console.log('Settimeout cb');
// }, 2000)

var n = 1;

var stInt = setInterval(function() {
    console.log(new Date())

    if(n == 5) {
        clearInterval(stInt);
    }

    n++;

}, 1000);

console.log('returned from setInterval',stInt);



console.log('Program Ends');
