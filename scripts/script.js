import list from './list.js';

let generateHTML = document.querySelector('.list');
const input = document.querySelector('.js-input');
const deleteBtn = document.querySelector('.delete-btn');
let items = document.querySelectorAll('.item');

function saveData() {
  list.push(input.value);
  generateCode(input.value);
  input.value = '';
};

// Interactive pencil
document.querySelector('.icon').addEventListener('click', () => {
 saveData();
 items = document.querySelectorAll('.item');
 dashed();
});

// Trigger Enter
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    saveData();
    items = document.querySelectorAll('.item');
    dashed();
  }
});

function generateCode(item) {
  generateHTML.innerHTML += `<li class='item'>${item}</li>`;
};

// Add listener for delete button
deleteBtn.addEventListener('click', () => {
  list.splice(0, list.length);
  generateHTML.innerHTML = '';
  items = document.querySelectorAll('.item');
  dashed();
});

//Make item dashed when being clicked
function dashed() {
  items.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('item-dashed')) {
        item.classList.remove('item-dashed');
      } else {
        item.classList.add('item-dashed');
      }
    });
  });
};

//Make item dashed when reload the window
items.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('item-dashed')) {
      item.classList.remove('item-dashed');
    } else {
      item.classList.add('item-dashed');
    }
  });
});

//Make the web can be scroll when has too much item
