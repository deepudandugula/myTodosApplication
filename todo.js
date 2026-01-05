let todoItemsContainerEle = document.getElementById("todoItemsContainer");
let addTodoButtonEle = document.getElementById("addTodoButton");

let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JS",
        uniqueNo: 3
    }
];
let todosCount = todoList.length;



function onTodoStatusChange(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");
}

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainerEle.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("d-flex", "flex-row", "todo-item-container");
    todoItemsContainerEle.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId);
    };
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainerEle = document.createElement("div");
    labelContainerEle.classList.add("d-flex", "flex-row", "label-container");
    todoElement.appendChild(labelContainerEle);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainerEle.appendChild(labelElement);

    let deleteIconContainerEle = document.createElement("div");
    deleteIconContainerEle.classList.add("delete-icon-container");
    labelContainerEle.appendChild(deleteIconContainerEle);

    let deleteIconEle = document.createElement("i");
    deleteIconEle.onclick = function() {
        onDeleteTodo(todoId);
    };
    deleteIconEle.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainerEle.appendChild(deleteIconEle);
}
for (let todo of todoList) {
    createAndAppendTodo(todo);
}

function onAddTodo() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    if (userInputElement.value === "") {
        alert("Enter Valid Input");
        return;
    }
    todosCount = todosCount + 1;

    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount
    };
    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}
addTodoButtonEle.onclick = function() {
    onAddTodo();
}