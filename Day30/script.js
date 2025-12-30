// .............REDUCE.........(VVIMP)
// Reduce result to single accumulator

let array = [1, 2, 3, 4, 5, 6, 7];

let result = array.reduce(function (accumulator, current) {
  return accumulator + current;
});

// WAP TO ADD EVEN NUMBER ONLY USING REDUCE

let arrays = [1, 2, 3, 4, 5, 6, 7];
let even = array.reduce(function (accumulator, current) {
  if (current % 2 == 0) {
    return accumulator + current;
  } else {
    return accumulator;
  }
}, 0);
console.log(even);

// WAP TO ADD odd NUMBER ONLY USING REDUCE

let Array = [1, 2, 3, 4, 5, 6, 7];
let oddResult = array.reduce(function (previousResult, currentElement) {
  if (currentElement % 2 !== 0) {
    return previousResult + currentElement;
  } else {
    return previousResult;
  }
}, 0);
console.log(oddResult);

// wap to subtract only those three number which is divisible by 3 use reduce

let subArray = [1, 2, 3, 4, 5, 6, 7];
let subResult = array.reduce(function (previousValue, currentResult) {
  if (currentResult % 3 == 0) {
    return previousResult + currentElement;
  } else {
    return previousResult;
  }
}, 0);
console.log(subArray);

// ...........FILTER...........
// TO FILTER OUT ELEMENTS, AND RETURN RESULT IN ARRAY

// CALLBACK => RETURN VALUE
// PREDICATE => RETURN BOOLEAN

// PREDICATE IS A FUNCTION THAT ALWAYS RETURN BOOlEAN VALUES
// CALLBACK IS A FUNCTION THAT CAN RETURN any arbitary value

const array2 = [10, 20, 30, 40, 50, 60];
let filterOutResult = array.filter(function (value) {
  if (value >= 40) {
    return true;
  } else {
    return false;
  }
});
console.log(filterOutResult);

let Person = [
  {
    name: "anisha",
    age: "20",
  },
  {
    name: "sami",
    age: "50",
  },
  {
    name: "prashansha",
    age: "20",
  },
];
const PersonResult = Person.filter(function (element) {
  if (element.age >= 40) {
    return true;
  } else {
    return false;
  }
});
console.log(PersonResult);

// ...........MATH OBJECT..............

let random = Math.random(); //produce number between 0 and 1 but never be 0 and 1
console.log(random);

let tranvatedValue = Math.trunc(20.2); //return integral part only
console.log(tranvatedValue);

let FloorValued = Math.Floor(20.7);
let coilValued = Math.ceil(20.7);
console.log(FloorValued);
console.log(coilValued);

let absoluteValue = Math.abs(-20);
console.log(FloorValue);

let cosValue = Math.cos(0);
let sinValue = Math.sin(0);
let tanValue = Math.tan(0);
console.log(cosValue);
console.log(sinValue);
console.log(tanValue);

const VALUE_OF_PI = Math.PI(16);
console.log(VALUE_OF_PI);

const cubeRoot = Math.cbrt(9);
console.log(cubeRoot);

const logValue = Math.log(10);
console.log(logValue);

const ExpenontialValue = Math.exp(20);
console.log(squareRoot);

const squareRoot = Math.squr(22);
console.log(squareRoot);

const Power = Math.pow(2, 3);
console.log(Power);
const RoundOFFValue = Math.round(20.4846629794);
console.log(RoundOFFValue); //round of 20

const MinimumValue = Math.min(1, 2, 3); // return minimum number from the input;
const MaximumValue = Math.max(1, 2, 3); // return maximum number from the input;
console.log(MaximumValue);
console.log(MinimumValue);

let num = Math.trunc(Math.random() * 200);
console.log(num);
