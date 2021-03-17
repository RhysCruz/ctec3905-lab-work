"use strict";

function addItem(text, done) {
  const item = document.createElement('li');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const button = document.createElement('button');
  button.textContent = "×";
  label.textContent = text;
  input.type = "checkbox";
  input.checked = done;
  input.id = `todo${todo.querySelectorAll('li').length + 1}`;
  label.htmlFor = input.id;
  button.addEventListener('click', ev => {
    item.remove();
  });
  item.appendChild(input);
  item.appendChild(label);
  todo.appendChild(item);
  item.appendChild(button);
}

add.addEventListener('click', ev => {
  if(text.value) {      // check we have data
    addItem(text.value);
    text.value = null;  // clear the input
    text.focus();       // give it the focus
  }
});

text.addEventListener('keydown', ev => {
  if(ev.key == "Enter") {
    add.click();
  }
});

function clearList() {
  while(todo.firstChild) {
    todo.removeChild(todo.firstChild);
  }
}

clear.addEventListener('click', ev => {
  clearList();
});
