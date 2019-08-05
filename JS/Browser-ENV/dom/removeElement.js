let para = document.querySelector('#firstPara');

para.remove();
// console.log(para);

let em = document.querySelector('#emTag');

console.log(em.parentNode)

em.parentNode.removeChild(em);


