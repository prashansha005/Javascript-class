function addTodo() {
  const input = document.getElementById("todoInput").value;
  if (input) {
    const todo = getTodo();
    todo.push(input);
    saveTodo(todo);
    document.getElementById("todoInput").value = "";
    showTodo();
  }
}

function deleteTodo(index) {
  const todo = getTodo();
  todo.splice(index, 1);
  saveTodo(todo);
  showTodo();
}
function showTodo() {
  const list = document.getElementById("todoList");
  list.innerHTML = showTodo()
    .map(
      (todo, i) =>
        `<li>${todo} <button onclick="deleteTodo(${i})">Delete</button></li>`
    )
    .join("");
}

showTodo();
