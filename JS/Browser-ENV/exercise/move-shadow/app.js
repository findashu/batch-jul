let hero = document.querySelector('.hero');
let head = document.querySelector('h1')


function shadow(e) {

    console.log(e.target);

    let {offsetHeight:height, offsetWidth:width} = hero;

    let {clientX : x, clientY: y} = e;

    head.style.textShadow = `${x}px ${y}px 0 green`;

}


hero.addEventListener('mousemove', shadow);