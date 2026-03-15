const todoInput = document.getElementById("todo-input");
const todoDate = document.getElementById("todo-date");
const addBtn = document.getElementById("add-btn");
const todoContainer = document.getElementById("todo-container");

let todoList = [
  {
    item: "Buy Milk",
    dueDate: "2023-10-04"
  },
  {
    item: "Go to College",
    dueDate: "2023-10-04"
  }
];

addBtn.addEventListener("click", addTodo);

function addTodo() {

  const item = todoInput.value.trim();
  const date = todoDate.value;

  if (item === "" || date === "") {
    alert("Please enter both todo and date");
    return;
  }

  todoList.push({
    item,
    dueDate: date
  });

  todoInput.value = "";
  todoDate.value = "";

  renderTodos();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodos();
}

function renderTodos() {

  todoContainer.innerHTML = "";

  todoList.forEach((todo, index) => {

    const todoElement = document.createElement("div");
    todoElement.classList.add("todo-item");

    todoElement.innerHTML = `
      <span class="todo-text">${todo.item}</span>
      <span class="todo-date">${todo.dueDate}</span>
      <button class="btn-delete">Delete</button>
    `;

    const deleteBtn = todoElement.querySelector(".btn-delete");

    deleteBtn.addEventListener("click", () => {
      deleteTodo(index);
    });

    todoContainer.appendChild(todoElement);

  });
}

renderTodos();