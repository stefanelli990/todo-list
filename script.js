const todoList = document.querySelector(".todo-list");
const addTodo = document.querySelector(".add-todo");
const add = document.querySelector(".add");
const check = document.querySelectorAll('.check');
const todoText = document.querySelectorAll('.todo-text');
const todoItems = document.querySelectorAll('.todo-list-item');


// add todo
const createTodo = (todo) => {
  const html = `
    <li class="todo-list-item"><span class="todo-text">${todo}</span><span class="todo-icons"><i class="fas fa-check check"></i>
            <i class="far fa-trash-alt delete"></i></span>
        </li>`;

  todoList.innerHTML += html;
};


// write todo in input
addTodo.addEventListener("submit", (e) => {

  // stop page from reload
  e.preventDefault();

   // input typing todo, trim() method delete spaces if added from both sides
  const todo = addTodo.add.value.trim();


  // prevent from adding empty todo
  if (todo.length) {
    createTodo(todo);
    
    // reset input fields from the start if spaces added
    addTodo.reset();
  }
});

// delete todo 
todoList.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
        
    }
});

// checked todo,  change icon and add success color
todoList.addEventListener('click', (e) => {
    if(e.target.classList.contains('check')) {
        e.target.parentElement.previousSibling.classList.toggle('line-through');
        e.target.classList.toggle('fa-times');
        e.target.parentElement.parentElement.classList.toggle('todo-done');
    }
});



