// const date = new Date();
// console.log(date.getTime());
// console.log(date.getFullYear()); //.toLocaleDateString("de-DE"));
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// .toLocaleDateString("ne_NP");

// const clock = document.getElementById("clock");

// setInterval(() => {
//   const date = new Date();
//   const currentHour = date.getHours();
//   const currentMinutes = date.getMinutes();
//   const currentSeconds = date.getSeconds();

//   const formattedTime = `${currentHour}:${currentMinutes}:${currentSeconds}`;
//   clock.innerText = formattedTime;
// }, 1000);

// KEYBOARD EVENTS                 // MOUSE EVENTS

// -KEYPRESS                            -CLICK
// -Keyup                               -doubleclick
// -onmouserelease                      -onmouseover
// -right/leftclick
// -scroll
// -onchange
// -keyboard events

// const inputBox = document.getElementById("datasource");
// inputBox.addEventListener("change", (e) => {
//   const data = e.target.value;
//   console.log(data);
//   inputBox.value = "";
// });

// const btn = document.getElementById("btn");
// const firstname = document.getElementById("firstname");
// const secondname = document.getElementById("secondname");
// const btn = document.getElementById("btn");
// btn.addEventListener("change", (e) => {
//   const data = e.target.value;
//   console.log(data);
// });
const passwordBox = document.getElementById("password");
const btn = document.getElementById("btn");
const length = 8;

// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";

const allChars = lowerCase + number;

btn.addEventListener("click", () => {
  let password = "";
  // password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
});
