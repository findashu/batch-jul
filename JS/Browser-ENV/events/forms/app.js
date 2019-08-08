
let frm = document.querySelector('form');
let para = document.createElement('para');
document.body.appendChild(para);
frm.addEventListener('submit', function(e) {

    e.preventDefault();
    // let name = frm[0].value;

    // let name = document.querySelector('#name').value;

    let n = document.querySelector('input[name=name]').value;

    let em = document.querySelector('input[name=email]').value;
    let pass = document.querySelector('input[name=password]').value;


    if(n == '') {
       

        para.innerText = 'Name feild cannot be empty';

        para.style.color = 'red';
        
    }

    console.log(n);

});


let nameField = document.querySelector('input[name=name]');

nameField.addEventListener('blur', function(e) {
    let val = nameField.value;
    console.log(val.length)
    if(val != '' && val.length < 2) {
        nameField.style.border = '1px solid red';
        para.innerText = 'Name field is required';
        para.style.color = 'red';
    }else {
        nameField.style.border = '1px solid green';
    }
});


let emailField = document.querySelector('input[name=email]');

emailField.addEventListener('focus', function(e) {
    emailField.style.border = '1px solid green';
    para.innerText = 'Please pass a correct email';
    para.style.color = 'red';
})







