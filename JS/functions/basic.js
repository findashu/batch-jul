

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


// WAP a program to check a number is even or odd;

var num = 34;




function isEven(a) {
    if(a % 2 == 0) {
        return true
        
    }else {
        return false
    }
}

var evn = isEven(25);

console.log(evn)


if(isEven(22)) {
    console.log('Do something with even')
}else {
    console.log('Not even');
}


// Default Parameters


function multiplication (a =3,b =4) {
    return a*b;
}

console.log(multiplication())    


