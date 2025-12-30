// const spinBtn = document.getElementById("spinBtn");
// const wheel = document.getElementById("wheel");
// const result = document.getElementById("result");

// const segments = [
//   "Prize 1",
//   "Prize 2",
//   "Prize 3",
//   "Prize 4",
//   "Prize 5",
//   "Prize 6",
// ];
// const degreesPerSegment = 360 / segments.length;
// let isSpinning = false;

// spinBtn.addEventListener("click", () => {
//   if (isSpinning) return;

//   isSpinning = true;
//   result.innerText = "";

//   let randomDegree = Math.floor(Math.random() * 360) + 360 * 5; // extra spins
//   wheel.style.transform = rotate(`${randomDegree}deg`);

//   setTimeout(() => {
//     const finalDeg = randomDegree % 360;
//     const index = Math.floor(
//       ((360 - finalDeg + degreesPerSegment / 2) % 360) / degreesPerSegment
//     );
//     result.innerText = "You got: " + segments[index];
//     isSpinning = false;
//   }, 5000);
// });

// ...............synchoronous counter and asynchoronou counter..........

setTimeout(function () {
  console.log("hello word");
}, 1000);

setInterval(function () {
  console.log("set interval fn");
});

// ...........DATE OBJECT..........

//....synchronous and asynchronous
const date = Date.now(); //UNIX EPOCH,1970 rati 12 baja
console.log(date); //in second,2k38 problem
