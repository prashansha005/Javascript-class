function f(x) {
  let result = 2 * x + 2;
  console.log(result);
}

f(2);

function f(A, B) {
  let sum = A + B;
  console.log(sum);
}
f(2, 2);

// f(10,20); function call/invoke

function welcomeMessage(name, address, dayname) {
  console.log(
    `Hello ${name},welcome to our platform.\n its good to know you are from ${address} \n see you next ${dayname}`
  );
}
welcomeMessage("prashansha", "butwal", "friday");

function StaticFunction() {
  console.log();
}

// STATIC FUNCTION

function findsmallest(a, b) {
  if (a > b) {
    console.log("b is smallest");
  } else {
    console.log("a is smallest");
  }
}
findsmallest(20, 30);

function CalculateSumofArray(Array) {
  let sum = 0;
  for (let i = 0; i < Array.length; i++) {
    sum += Array[i];
  }
  console.log(sum);
}
let input = [1, 2, 3, 4, 5];
CalculateSumofArray(input);

// function returning value

function calculatesum(a, b) {
  let sum = a + b;
  return sum;
}
let result = calculatesum(1, 2);
console.log(result);

function welcome(name) {
  let message = name;
  return message;
}
let output = welcome[prashansha];
let message;
