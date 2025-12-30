// ........INTRO TO EVENT HANDELING AND EVENTS.......
let COLORS = ["red", "green", "blue", "yellow", "firebrick"];
const btn = document.getElementById("btn");
var divBox = document.getElementById("box");

btn.addEventListener("click", function () {
  let randomIndex = Math.trunc(Math.random() * COLORS.length);
  divBox.style.backgroundColor = COLORS[randomIndex];
});

// let color = ["red", "yellow", "green", "blue"];
// let result=

// let COUNTRY = (countries = [
//   "United States",
//   "Canada",
//   "Mexico",
//   "Brazil",
//   "Argentina",
//   "United Kingdom",
//   "Germany",
//   "France",
//   "Italy",
//   "Spain",
//   "Russia",
//   "China",
//   "Japan",
//   "South Korea",
//   "India",
//   "Australia",
//   "New Zealand",
//   "South Africa",
//   "Egypt",
//   "Nigeria",
//   "Kenya",
//   "Saudi Arabia",
//   "Turkey",
//   "Indonesia",
//   "Thailand",
// ]);
let Country = ["Japan", "Malaysia", "Singapore", "Thailand", "Australia"];

let randomCountryIndex = Math.trunc(Math.random() * Country.length);

btn.addEventListener("click", function () {
  let msg = prompt("Enter Your Name");
  box2.style.backgroundColor = COLORS[randomCountryIndex];
  box2.style.padding = "30px";
  box2.style.border = "2px solid black";
  box2.style.width = "350px";
  box2.style.margin = "10px";
  box2.style.fontSize = "30px";
  box2.style.color = "White";
  box2.innerHTML = `${msg} will be in ${Country[randomCountryIndex]}`;
});
