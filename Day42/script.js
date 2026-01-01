// const getTodos = () => JSON.parse(localStorage.getItem("todos") || "[]");
// const saveTodos = (todos) =>
//   localStorage.setItem("todos", JSON.stringify(todos));

// function addTodo() {
//   const input = document.getElementById("todoInput").value;
//   if (input) {
//     const todos = getTodos();
//     todos.push(input);
//     saveTodos(todos);
//     document.getElementById("todoInput").value = "";
//     showTodos();
//   }
// }

// function deleteTodo(index) {
//   const todos = getTodos();
//   todos.splice(index, 1);
//   saveTodos(todos);
//   showTodos();
// }

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const startBtn = document.getElementById("startbtn");
const stopBtn = document.getElementById("stopbtn");

// inital data
let HOUR = 0;
let MINUTE = 0;
let SECOND = 0;
let timerId;

startBtn.addEventListener("click", function () {
  timerId = setInterval(() => {
    SECOND = SECOND + 1;
    if (SECOND == 60) {
      MINUTE = MINUTE + 1;
      SECOND = 0;
    }
    showOnScreen();
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(timerId);
});

function showOnScreen() {
  hour.innerText = HOUR + ":";
  minute.innerText = MINUTE + ":";
  second.innerText = SECOND;
}
