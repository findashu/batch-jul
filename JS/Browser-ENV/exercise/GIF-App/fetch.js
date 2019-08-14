let sbmtBtn = document.querySelector('button');
let inpt = document.querySelector('input');
let displayImg = document.querySelector('.images');


function getData() {
    let value = inpt.value;

    let url = `https://api.giphy.com/v1/gifs/search?api_key=VV8DtITCPM0dCnPGEEPux8nruQan9cWZ&q=${value}&limit=10&offset=0&rating=G&lang=en`;

    displayImg.innerHTML = ''
   fetch(url)
   .then(resp => resp.json())
   .then(d => {
        console.log(d);
        d.data.forEach((ele,i) => {
            console.log(ele.images.downsized.url);
            
            let img = document.createElement('img');

            img.src = ele.images.downsized.url;

            displayImg.appendChild(img);
        });
   })
   .catch(err => {
       console.log(err)
       let p = document.createElement('p');
       p.innerText = 'No gif found';
       displayImg.appendChild(p);
   });
}

sbmtBtn.addEventListener('click', getData);