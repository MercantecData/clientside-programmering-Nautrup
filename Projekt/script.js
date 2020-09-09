var addToDoButton = document.getElementById('addToDo');
var ulContainer = document.getElementById('ul');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');
var ul = document.getElementById('ul');

addToDoButton.addEventListener('click', TestMethod)

function createElements(event) {
    // opretter paragraf element
    var paragraph = document.createElement('p');
    // sætter texten til at være det samme som i inputboxen
    paragraph.innerText = inputField.value;
    // Ny event listener der sætter en streng gennem ordet hvis man trykker
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through"
    })
    // tilføjer den til min toDoContainer
    toDoContainer.appendChild(paragraph);
}

// Et forsøg på at gøre den mere advanceret.
function TestMethod(event) {
    event.preventDefault();
     // opretter paragraf element
     var paragraph = document.createElement('p');
     paragraph.classList.add('paragraph');
     // sætter texten til at være det samme som i inputboxen
     paragraph.innerText = inputField.value;
    
     // opretter en knap element.
     var deleteButton = document.createElement('button');
     deleteButton.classList.add('btn-delete');
     deleteButton.innerText ="-"

     deleteButton.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through"
    
    })
     // Ny event listener der sætter en streng gennem ordet hvis man trykker
     paragraph.addEventListener('click', function() {
         paragraph.style.textDecoration = "line-through"
     })
     // tilføjer den til min toDoContainer
     toDoContainer.appendChild(paragraph);
     toDoContainer.appendChild(deleteButton);
}