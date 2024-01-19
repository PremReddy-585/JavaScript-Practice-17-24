//Dynamically using javscript for making of input element DOM

/*let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "myCheckbox";

document.body.appendChild(inputElement);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkbox" );
labelElement.textContent = "Graduated";
document.body.appendChild(labelElement);*/



let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [
    {
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn Javascript"
       
    },
    {
        text: "Learn react"
       
    },
    {
        text: "Learn python"
    }
    ]

function createAndAppendTodo(todo){
    let todoElement = document.createElement("li");
todoElement.classList.add("todo-item-container", "d-flex", "flex-row");

todoItemsContainer.appendChild(todoElement);

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "ChechboxInput";
inputElement.classList.add("checkbox-input");

todoElement.appendChild(inputElement);

let labelContainer = document.createElement("div");
labelContainer.classList.add("label-container","d-flex", "flex-row");

todoElement.appendChild(labelContainer);

let LabelElement = document.createElement("label");
LabelElement.setAttribute("for", "checkboxInput");
LabelElement.classList.add("checkbox-label");
LabelElement.textContent = todo.text;

labelContainer.appendChild(LabelElement);

let deleteIconContainer = document.createElement("div");
deleteIconContainer.classList.add("delete-icon-container");

labelContainer.appendChild(deleteIconContainer);

let deleteIcon = document.createElement("i");
deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

deleteIconContainer.appendChild(deleteIcon);

}


for (let todo of todoList){
    createAndAppendTodo(todo);
}
