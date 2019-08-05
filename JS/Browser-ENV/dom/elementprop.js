let lastPara = document.querySelector('.para');
let secondPara = document.querySelector('.secondPara')

console.log(lastPara);


lastPara.lastChild.textContent = 'Dynamic Value'

console.log(secondPara.childNodes)

let paraFirstChild = secondPara.firstChild;

// case of text node
paraFirstChild.nodeValue = 'THis is em tag ';

console.log(paraFirstChild);

// innerText and innerHTML


// lastPara.innerText = 'Hello using innerText Property <span>Testing innerHTML</span>';


lastPara.innerHTML = 'Hello using innerText Property <span>Testing innerHTML</span>';


// lastPara.style.color = 'tomato';

// lastPara.style.border = '1px solid black';


console.log(lastPara.style.cssText)

lastPara.style.cssText = 'color:tomato; border:1px solid black;'


lastPara.style.cssText += 'font-size:20px;'


console.log(secondPara.classList[1]);


console.log(secondPara.className)

secondPara.className += ' dynamic-class' ;

secondPara.className = "secondPara"

secondPara.classList += ' dynamic-class'

console.log(secondPara.className);

console.log(secondPara.dataset.id);
