//Todolist 만들기

const ul = document.querySelector("ul");
const addBtn = document.querySelector("#addBtn");
const input = document.querySelector("input");

let todos = [];

addEventListener("DOMContentLoaded", () => {
  todos = JSON.parse(localStorage.getItem("todos"));
  if (todos) {
    todos.forEach((todo) => {
      addTodo(todo);
    });
  }
});

addBtn.addEventListener("click", () => {
  addTodo(input.value);
  todos.push(input.value);
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
});

function addTodo(todo) {
  const li = document.createElement("li");
  li.textContent = todo;
  const div = document.createElement("div");
  const delBtn = document.createElement("button");
  delBtn.textContent = "삭제";
  div.appendChild(li);
  div.appendChild(delBtn);
  delBtn.addEventListener("click", () => {
    div.remove();
    todos = todos.filter((element) => element !== todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  });
  ul.appendChild(div);
}
