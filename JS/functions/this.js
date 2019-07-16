// console.log(this);


let c = 10;

function foo() {
    var a = 10;
    console.log(this.c);
}

foo();


var obj = {
    color : 'blue',

    description: function() {
        console.log(this);


        function foo(){
           
            console.log('Inner fn',this)
        } 

        foo();
    }
}

obj.description();