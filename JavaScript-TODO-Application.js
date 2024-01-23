let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [
    {
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn Javascript",
        uniqueNo: 3
       
    },
    {
        text: "Learn react",
        uniqueNo: 4
    },
    {
        text: "Learn python",
        uniqueNo: 5
    }
    ]

function createAndAppendTodo(todo){
let checkboxId = "checkbox" + todo.UniqueNo;

    
    let todoElement = document.createElement("li");
todoElement.classList.add("todo-item-container", "d-flex", "flex-row");

todoItemsContainer.appendChild(todoElement);

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = checkboxId;
inputElement.classList.add("checkbox-input");

todoElement.appendChild(inputElement);

let labelContainer = document.createElement("div");
labelContainer.classList.add("label-container","d-flex", "flex-row");

todoElement.appendChild(labelContainer);

let LabelElement = document.createElement("label");
LabelElement.setAttribute("for", checkboxId);
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
