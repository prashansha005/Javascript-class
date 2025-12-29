// ..............WAYS OF DEFINING FUNCTIONS...........

// NORMAL WAY WITH NAME

function PrintName(name) {
  console.log(name);
}

let PrintName1 = function (name) {
  console.log(name);
};

// ARROW FUNCTION, LAMBDA FUNCTION, ANONMYOUS //LAMBDA-> SHORT/EASY

let PrintName2 = (name) => {
  console.log(name);
};

PrintName2("prashansha");

let addFN = (a, b) => {
  console.log(a + b);
};

addFN(10, 20);

// IN NORMAL FN YOU WOULD NEED TO EXPLICITLY USE RETURN KEYWORD, IN ARROW FUNCTION YOU DONT
// HAVE TO DO ALL THOSE HEAVY LIFTING.

let subFN = (a, b) => a - b;

let subResult = subFN(10, 5);
console.log(subResult);

// ............CALLBACK FN AGAIN......

function Pizza(fn) {
  fn();
  console.log("argument fn called");
}

Pizza(() => console.log("Hello world"));

// BACK TO ARRAY AGAIN

let MyArray = [3, 4, 5, 6, 7, 5, 5, 3, 2];
MyArray.forEach(function (value, index) {
  console.log(`Index=${index} with value =${value}`);
});

let MyArrays = [3, 4, 5, 6, 7, 5, 5, 3, 2];
MyArrays.forEach((value, index) => {
  console.log(`value =${value} and index=${index}`);
});

let myArray = [1, 2, 3, 4, 5, 6, 7]; //use foreach to print sum of all elements
let sum = 0;
myArray.forEach((value, index) => {
  sum += value;
});
console.log(sum);

// print all elements which are divisible by 3 only, use foreach

let Myarray = [3, 6, 9, 12, 15, 18, 21];
Myarray.forEach((num) => {
  if (num % 3 == 0);
  console.log(num);
});

//............MAP (V.V.IMP)........

let studentNames = ["prashansha", "anisha", "samikshya", "shreeya"];
let result = studentNames.map(function (value, index) {
  return `hello ${value}`;
});
console.log(result);

let studentName = ["prashansha", "anisha", "samikshya", "shreeya"];
let results = studentName.map(function (value, index) {
  return `${value}'s`;
});
results.forEach((value) => {
  console.log(value);
});
