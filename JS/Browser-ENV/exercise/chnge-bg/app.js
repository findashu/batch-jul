// console.log(document.documentElement.childNodes);
function randomNumber(min,max) {
    return parseInt(Math.random() * (max-min) + min)
}

// console.log(randomNumber(1,255));

// document.documentElement.childNodes[2].style.backgroundColor = `rgb(${randomNumber(1,255)},${randomNumber(1,255)},${randomNumber(1,255)})`;



// document.body

let bd = document.querySelector('body');

bd.style.backgroundColor = `rgb(${randomNumber(1,255)},${randomNumber(1,255)},${randomNumber(1,255)})`;