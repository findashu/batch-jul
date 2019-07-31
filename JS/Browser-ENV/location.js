console.log(location);


for(var i in location) {
    if(typeof location[i] === 'string'){
        console.log(`${i} : ${location[i]}`)
    }
}


// location.href = "https://www.thruskills.com/";

// Reloads current window

// location.reload();


// location.assign("https://www.thruskills.com/");



// It doesn't create history
// replace()


