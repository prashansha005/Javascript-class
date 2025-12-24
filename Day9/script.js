//........ASSIGMENT OPERATORS.......

// let first=10;
// const SECOND = 10;

//shorthand opertor

// let a=(b=c=d=e=5);
// console.log(b);

//...........COMPOUND OPERATORS.......

// let myVar=10;
// myVar = myVar -5;

// console.log((myVar += 20));
//equivalent my var = myvar+20

// let myMoney=(prompt('Enter your nepali currency '));
// let NPR=136.57
// console.log(`According to today's ${myMoney} is equal to ${myMoney/NPR} NPR`);
// console.log(myMoney*=NPR);

// let firstNumber = firstNumber1= firstNumber2=firstNumber3=firstNumber4= Number(prompt("Enter First Number"));
// let secondNumber= Number(prompt("Enter Second Number"));
// console.log(`Sum is ${firstNumber1+=secondNumber}`);
// console.log(`Sub is ${firstNumber2-=secondNumber}`);
// console.log(`Mul is ${firstNumber3*=secondNumber}`);
// console.log(`Div is ${firstNumber4/=secondNumber}`);

//........INCREMENT/DECREMENT OPERATOR.......

let myfirstVariable=12;
let secondVariable=++myfirstVariable //pre variable
console.log(myfirstVariable);
console.log(secondVariable);

let firstVariable=20;
let mysecondVariable=myfirstVariable++//post variable
console.log(myfirstVariable);
console.log(secondVariable);

//.......CHALLENGING QUESTION......

let myfirstNumber=20;
let mysecondNumber=100;
let myResult=++myfirstNumber +  myfirstNumber-- + mysecondNumber-- - --mysecondNumber;
console.log(myResult);
