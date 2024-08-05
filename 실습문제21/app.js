let todos = [];

const todo = {
  text: "",
  completed: false,
};

const todoRepository = {
  getTodos: () => {
    return todos;
  },
  addTodo: (todo) => {
    todos.push(todo);
  },
  removeTodo: (text) => {
    todos = todos.filter((todo) => todo.text !== text);
  },
};

function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value.trim();

  if (todoText) {
    todoRepository.addTodo({
      ...todo,
      text: todoText,
    });
    updateTodoList();
    todoInput.value = "";
  }
}

function removeTodo(text) {
  todoRepository.removeTodo(text);
  updateTodoList();
}

function updateTodoList() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  todoRepository.getTodos().forEach((todo) => {
    const li = document.createElement("li");
    li.innerText = todo.text;
    li.onclick = () => removeTodo(todo.text);
    todoList.appendChild(li);
  });
}
