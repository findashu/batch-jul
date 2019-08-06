let btn = document.querySelector('button');


function randomNumber(min,max) {
    return parseInt(Math.random() * (max-min) + min)
}

let handler = () => {
    console.log(this);
    document.body.style.backgroundColor = `rgb(${randomNumber(1,255)},${randomNumber(1,255)},${randomNumber(1,255)})`;
}


btn.onclick = handler;