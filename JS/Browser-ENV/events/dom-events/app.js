let btn = document.querySelector('button');


function handler2(e) {
    
    console.log(e);
    alert('hiii');
    btn.removeEventListener('click',handler2);
}

function handler(e) {
    
    console.log(e);
    alert('Hello');
}

btn.addEventListener('click', handler);

btn.addEventListener('click', handler2);

// btn.removeEventListener('click',handler2);
