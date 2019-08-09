let subBtn = document.querySelector('input[type=submit]');
let inpt = document.querySelector('input[type=text]');
let todoItems = document.querySelector('.list-items');
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItems() {
    let value = inpt.value;

    let itm = {
        value,
        done: false
    }

    items.push(itm);
    localStorage.setItem('items', JSON.stringify(items));
    renderList(items, todoItems);
    inpt.value = '';
}

function renderList(list, displayList) {
    displayList.innerHTML = list.map(function(ele,i) {
        return `
                <li>
                    <input type="checkbox" data-id="${i}" ${ele.done ? 'checked':''} id=items${i}>
                    <label for="items${i}">${ele.value}</label>
                </li>
                `
    }).join('');
}

function toggle(e) {
    
    if(!e.target.matches('input')) return;
    let ele = e.target;
    let index = parseInt(ele.dataset.id);
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    renderList(items, todoItems);
}


renderList(items, todoItems);

subBtn.addEventListener('click', addItems);

todoItems.addEventListener('click', toggle);