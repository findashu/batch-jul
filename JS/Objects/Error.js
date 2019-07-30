console.log('PRogram Started');



function foo() {
    console.log('Hello Executing Function');
}

try {
    foo();

    try {
        throw new Error('Fix it')
    } catch (er){
        console.log('Inner Catch', er);
    }


    throw new ReferenceError('Something went Wrong');

} catch (error) {
    console.log('Catch Block');
    console.log(error);
} finally {
    console.log('Please fix the function');
}

console.log('Program Ends');


// SyntaxError
// ReferenceError
// 