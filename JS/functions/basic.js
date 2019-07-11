

function printName () {
    // body of function
    console.log('Ashutosh Mishra')
}

// calling a function
printName();


// 

// function add (a,b,c,d) {

//    if(a && b && c) {
//         return a+b+c+d;
//    } else {
//     //    return 'Pass valid number'
//         console.log(b)
//    }

//    console.log('Execution Ends')
   
// }



function add (a,b) {
    var res = 0;
   for(var i =0; i< arguments.length ; i++) {
        res += arguments[i]
   }

   return res;
   
}



var res = add(12,34) ;

console.log(res);
