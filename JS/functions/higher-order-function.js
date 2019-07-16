
function outer() {
   var outVar = 10;
    
   function inner() {
       var innerVar = 20;

        console.log('Inner Function');
        console.log(outVar)
    }

    // console.log(innerVar)

    inner();
}

outer();


function add (a,b) {

    var sum = a + b;

    function square () {
        return sum*sum;
    }

    // return square(sum)

    return square;

}


var sq = add(5,5);


var s = sq()

console.log(s);


var sqr = add(2,3);

var res = sqr();

console.log(res);



// 
function fullName(fn1, fn2) {

    var first = 'Ashu';
    var last = 'Mishra'

    return fn1(first) +' '+ fn2(last)
}


function firstName (n) {
    return n;
}

function lastName (l) {
    return l;
}


var fn = fullName(firstName, lastName);

console.log(fn)