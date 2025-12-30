// let random = (1, 2, 3);
// let result = Math.random(function (value) {
//   if (value >= 1) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log();

let randomNumber = Math.trunc(Math.random() * 4);
if (randomNumber == 0) {
  console.log("Generate number is 0");
} else if (randomNumber == 1) {
  console.log("Generate number is 1");
} else if (randomNumber == 2) {
  console.log("Generate number is 2");
} else {
  console.log("Generate number is 3");
}
console.log(randomNumber);

let players = ["Ram", "shyam", "hari", "sita", "geeta"];
let randomPlayerIndex = Math.trunc(Math.random() * players.length); //gnerates from 0-4
console.log(`the random winner is: ${players[randomPlayerIndex]}`); //accessing aray index

// .....................LETS HEADS TOWARDS DOM ( DOCUMENT OBJECT MODEL)..............
