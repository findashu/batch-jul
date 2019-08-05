let btn = document.querySelector('button');
let para = document.createElement('p');
document.body.appendChild(para);

function greetUser() {
    
    let inputValue = document.querySelector('#name').value;

    if(inputValue) {
        para.innerText = `Welcome ${inputValue}`;
        para.style.backgroundColor = 'green';
        para.style.color = 'white';
    }else {
        para.innerText = 'Please provide your name';
        para.style.backgroundColor = 'red';
    }
}

btn.onclick = greetUser;