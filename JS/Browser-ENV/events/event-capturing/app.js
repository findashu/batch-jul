let outer = document.querySelector('#outer');
let inner = document.querySelector('#inner');
let btn = document.querySelector('button');




function outerDiv () {
    alert('Outer Div');

    outer.style.border = '1px solid green';
}

function innerDiv () {
    alert('Inner Div');

    inner.style.border = '1px solid red';
}


function btnHandler (e) {
    e.stopPropagation();
    alert('Button');
    btn.style.border = '1px solid blue';
}

outer.addEventListener('click', outerDiv,true);
inner.addEventListener('click', innerDiv,true);
btn.addEventListener('click', btnHandler,true);
