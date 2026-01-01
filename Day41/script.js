// LOCALSTORAGE   used to store data for long term-- VVIP
// INDEXED DB -> LIKE MYSQL DATABASE FOR BROWSER USED TO STORE DATA FOR LONG TERM
// cookies -> small chunk of code that stores in the client browser storage.
//   used to store private and sensitive credentials

// PCI-DSS STANDARD -> TRUSTWORTHY STANDARD FOR PAYMENTS

// ............LOCAL STORAGE..........

// localStorage.setItem(Key, values);

// localStorage.setItem("name", "Prashansha Neupane");
// const data = localStorage.getItem("name");
// console.log(data);

// set->write
// get->read

// Create class animal
// include public

let inputBox = document.getElementById("toDoInput");
let resultBox = document.getElementById("result");
let addButton = document.getElementById("btn");
let result = document.getElementById("result");
let DataBase = JSON.parse(localStorage.getItem("myitems")) || [];
showOnScreen(); //update data on screen after submit

addButton.addEventListener("click", function () {
  const TodoText = inputBox.value; // get values from input box
  DataBase.push(TodoText);
  console.log(DataBase);
  let myJson = JSON.stringify(DataBase);
  localStorage.setItem("myitems", myJson);

  inputBox.value = "";

  showOnScreen();
});
// container.innerHTML = myJson;

// to reset input value after submit

function showOnScreen() {
  let FinalResult = "";
  DataBase.forEach(function (value) {
    FinalResult = FinalResult + value + "\n";
  });
  resultBox.innerText = FinalResult;
}

// create a stopwatch
