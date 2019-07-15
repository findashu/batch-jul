
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

    function square (x) {
        return x*x
    }


    var sum = a + b;


    // return square(sum)

    return square;

}


var sq = add(5,5);


var  s = sq(10);


console.log(s)