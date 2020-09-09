var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");

todoButton.addEventListener('click', addTodo);

function addTodo (event) {
    event.preventDefault();

    // Opretter et div element
    var todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // opretter li element
    var todoLi = document.createElement('li');
    // indæstte data
    todoLi.innerText = todoInput.value;
    // Giver det element en class
    todoLi.classList.add('todo-item');
    // smider todoLi ind i todoDiv'en
    todoDiv.appendChild(todoLi);

    // Complete knap
    var complteButton = document.createElement('button');
    complteButton.innerHTML = '<i class="fas fa-check"></i>';
    complteButton.classList.add('btn-complete');
    todoDiv.appendChild(complteButton);
    
    // Slet knap
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('btn-delete');
    todoDiv.appendChild(deleteButton);

    // Smider alt det overstående ind i vores todoList, som allerede er i vores index.html
    todoList.appendChild(todoDiv);
}