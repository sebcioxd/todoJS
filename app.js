let addToButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToButton.addEventListener('click', (event) => {
  event.preventDefault();
  let inputValue = inputField.value;
  if (inputValue.trim() ===  "") {
    alert('Wrong input')
    return;
  } else {
    let listElemnent = document.createElement('li');
    listElemnent.innerText = inputField.value;
    toDoContainer.querySelector('ol').appendChild(listElemnent);
    inputField.value = " ";
  
    listElemnent.addEventListener('click', (event) => {
      event.preventDefault();
      listElemnent.style.textDecoration = 'line-through'
    })
    listElemnent.addEventListener('dblclick', (event) => {
      event.preventDefault();
      toDoContainer.querySelector('ol').removeChild(listElemnent);
    })
  }
 
})
