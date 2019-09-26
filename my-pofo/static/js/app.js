let frm = document.querySelector('#contactForm');
let messagePara = document.querySelector('#resp')
function formHandler(e) {
    e.preventDefault();

    let data = {
        name: document.querySelector('input[name=name]').value,
        email: document.querySelector('input[name=email]').value,
        mobile: document.querySelector('input[name=mobile]').value,
        description: document.querySelector('#desc').value
    }
    console.log(data);
    fetch('/contact', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }).then(resp => resp.json())
        .then(data => {
            messagePara.innerText = data.message;
            messagePara.style.color = 'white';
            messagePara.style.backgroundColor = 'green';
        }).catch(err => {
            // console.log('Error', err);
            messagePara.innerText = data.message;
            messagePara.style.backgroundColor = 'red';
        })
}

frm.addEventListener('submit', formHandler);