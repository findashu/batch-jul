setTimeout(function(){
    console.log('Set time out')
}, 2000);

var i = 1
setInterval(function() {
    console.log('Every Second');

    if(i == 4) {
        clearInterval(this)
    }

    i++;
}, 1000);

// console.log(id);


setImmediate(function() {
    console.log('Immediate execute');
})

setTimeout(function() {
    console.log('Timeout with 0ms')
},0)