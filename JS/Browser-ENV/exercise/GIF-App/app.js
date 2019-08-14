// Steps
/**
 * First Acces input field, submit button, display image div
 * Attch a click event on submit button
 * Inside Event Handler Acces input value
 * Create a XHR Object
 * Make Request
 * Inside readystatechange handler access the data
 * And display on DOM
 */

let sbmtBtn = document.querySelector('button');
let inpt = document.querySelector('input');
let displayImg = document.querySelector('.images')


function getData() {
    let value = inpt.value;

    let xhr = new XMLHttpRequest();

    function handler() {

        displayImg.innerHTML = '';

        if(xhr.readyState < 4) {
            return;
        }

        if(xhr.status != 200) {
            return;
        }

        console.log(JSON.parse(xhr.responseText))

        let resp = JSON.parse(xhr.responseText);

        let imgs = resp.data.images;


        Object.keys(imgs).forEach(function(ele,i,arr) {
            // console.log(imgs[ele]);

            let img = document.createElement('img');

            img.src = imgs[ele].url;

            displayImg.appendChild(img);

        })

    }

    xhr.onreadystatechange = handler;
    xhr.open('GET', 'https://api.giphy.com/v1/gifs/translate?api_key=VV8DtITCPM0dCnPGEEPux8nruQan9cWZ&s='+value, true);
    xhr.send();
}

sbmtBtn.addEventListener('click', getData);