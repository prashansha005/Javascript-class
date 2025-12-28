// ------------- SHALLOW COPY AND DEEP COPY ------------------

let a = 10;
let b = a;
b = 30;
console.log(a); // 10
console.log(b); // 30

let person = {
  personName: "Ram",
};

let anotherPerson = person;
console.log(anotherPerson);

person.personName = "CHANGED_NAME";

console.log(person); // {personName: "Ram"}
console.log(anotherPerson); // {personName: "CHANGED_NAME"}

// primitive type->number,boolean,null,undefined,bollean
// non-primitive-> object,array

// -------------------- PASS BY VALUE VS PASS BY REFERENCE ---------

// 1) Pass by value

let first = 10;
let second = first; // second = 10

first = 20;

console.log(a);
console.log(b);

// ------------ FOR SPECIAL TYPES -------------

let myFirstObject = {
  personName: "Ram",
};

let myCopyOfFirstObject = myFirstObject;

myFirstObject.personName = "Shyam";

console.log(myFirstObject);
console.log(myCopyOfFirstObject);

let dogObject = {
  animalName: "Dog",
  color: "Shade of black",
};

let anotherDog = dogObject; // pass by reference , pass by address

dogObject.color = "Red";

console.log(anotherDog);
console.log(dogObject);

let firstName = "Ram";
let secondName = firstName; // Pass by value

secondName = "SHYAM";

console.log(firstName); // Ram
console.log(secondName); // SHYAM

let myNestedObject = {
  address: {
    permanent: "Palpa",
    temporary: "Butwal",
  },
};

// let myNestedObjectCopy = myNestedObject;
let myNestedObjectCopy = structuredClone(myNestedObject);
myNestedObject.address.permanent = "Kathmandu";

console.log(myNestedObject);
console.log(myNestedObjectCopy);

//WAP TO DEMONSTRATE PASS BY VALUE AND PASS BY REFERENCE

//PASS BY VALUE
let name = "prashansha neupane";
let firstNamee = name;

firstNamee = "prashansha";

console.log(name);
console.log(firstNamee);

//PASS BY REFERENCE

let studentName = {
  firstName: "prashansha",
  secondName: "neupane",
};

// let copyofStudentName = studentName;

// copyofStudentName.sName = "Maya";
// copyofStudentName.fName = "Amelia";

// console.log(studentName);
// console.log(copyofStudentName);

//Finally use structuredclone to one of your program

let copyofStudentName = structuredClone(studentName);
copyofStudentName.sName = "maya";
copyofStudentName.fName = "amelia";

console.log(studentName);
console.log(copyofStudentName);

//CREATE ONE PERSONOBJECT WITH NAME -> FirstName, LastName
// ADDRESS -> Temporary And Permanent Address
//Copy person object to three different variables
// Make sure that changes in one object property doesnot Reflect to another one

let personObject = {
  Name: {
    firstName: "prashansha",
    SecondName: "neupane",
  },
  Address: {
    temporary: "butwal",
    permanent: "kathmandu",
  },
};

let firstVariable = structuredClone(personObject);
firstVariable.Name.firstName = "zara";
firstVariable.Name.SecondName = "rose";

let secondVariable = structuredClone(personObject);
secondVariable.Name.firstName = "zoya";
secondVariable.Name.SecondName = "grace";

let thirdVariable = structuredClone(personObject);
thirdVariable.Name.firstName = "sophia";
thirdVariable.Name.SecondName = "mia";

console.log(personObject);
console.log(firstVariable);
console.log(secondVariable);
console.log(thirdVariable);

//.............FUNCTION..........
//reusable block of code to perform specific task/action

function add(x, y) {
  console.log("sum", x + y);
}
add(2, 2);
add(4, 4);
add(10, 30);

function sub(x, y) {
  console.log("Sub", x - y);
}
sub(10, 2);
sub(100, 50);
sub(2025, 2004);

function mul(x, y) {
  console.log("Mul", x * y);
}
mul(10, 2);
mul(100, 50);
mul(20, 20);

function div(x, y) {
  console.log("div", x / y);
}
div(10, 2);
div(100, 50);
div(2025, 25);

function mod(x, y) {
  console.log("mod", x % y);
}
mod(10, 3);
mod(100, 50);
mod(2025, 26);

// ...........ASSIGMENT............

//QUESTION NO 1

function Add(x, y) {
  console.log("Add", x + y);
}
Add(2, 11);

//QUESTION NO 2

function Sub(x, y) {
  console.log("Sub", x - y);
}
Sub(11, 2);

//QUESTION NO 3

function mult(x, y) {
  console.log("Mult", x * y);
}
mult(11, 2);

//QUESTION NO 4

function div(x, y) {
  console.log("div", x / y);
}
div(25, 5);

//QUESTION NO 5

function sqr(x) {
  console.log("sqr", x ** 2);
}
sqr(2);

//QUESTION NO 6

function cube(x) {
  console.log("cube", x ** 3);
}
cube(3);

//QUESTION NO 7

function max(x, y) {
  if (x > y) {
    console.log("Max is", x);
  } else {
    console.log("Max is", y);
  }
}
max(2, 4);

//QUESTION NO 8

function min(x, y) {
  if (x < y) {
    console.log("Min is", x);
  } else {
    console.log("min is", y);
  }
}
min(2, 4);

//QUESTION NO 9

function even(x) {
  if (x % 2 == 0) {
    console.log("Even");
  }
}
even(2);

//QUESTION NO 10

function odd(x) {
  if (x % 2 == 1) {
    console.log("Odd");
  }
}
odd(3);

//QUESTION NO 11

function factorial(x) {
  let fact = 1;
  for (i = 1; i <= x; i++) {
    fact *= i;
  }
  console.log(fact);
}
factorial(5);

//QUESTION NO 12

function Prime(x) {
  if (x <= 1) {
    console.log(x, "is not a prime number");
  } else {
    let isPrime = true;

    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(x + " is a prime number");
    } else {
      console.log(x + " is not a prime number");
    }
  }
}
Prime(11);
Prime(15);
