let ul = document.querySelector('ul');
let li = document.querySelector('#firstLi');
let anc = document.querySelector('#home');



ul.onclick = function () {
    alert('UL Clicked')
}

li.onclick = function () {
    alert('LI Clicked')
}

anc.onclick = function (e) {

    // stop bubbling
    e.stopPropagation();

    alert('anchor Clicked')
}