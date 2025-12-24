//..........BITWISE OPERATOR......

//Bitwise and

// console.log(2|3);
//1 0
//1 1
//....
//1 1

//BITWISE SHIFT

// console.log(3 << 1); LEFT SHIFT
//0 0 0 0 0 0 1 1 
//0 0 0 0 0 1 1 0

//console.log(2 & 4):

//0 1 0 
//1 0 0 
//------
//0 0 0

// console.log(4 << 1);
//1 0 0 
//0 1 0 => 2

//1 1 1

//4 
//3
//1 0 0
//0 1 1


//TERNARY OPERATOR

//SYNTAX: condition ? what if true : if false

// console.log(10 > 2 ? 'Greater than 2' : 'less than 2');

// let myNumber1=(prompt('Enter a number'));
// let myNumber2=(prompt('Enter a number'));

// console.log(myNumber1>myNumber2 ? `${myNumber1} is Greater than ${myNumber2}`: `${myNumber1} is Less than ${myNumber2}`);
// alert(myNumber1>myNumber2 ? `${myNumber1}is Greater than ${myNumber2}`: `${myNumber1} is Less than ${myNumber2}`);
 
// const USERNAME='admin';
// const PASSWORD='admin';

//let myUsername=(prompt('Enter your username'));
//let myPassword=(prompt('Enter a password'));
//console.log(USERNAME==myUsername && PASSWORD==myPassword ?"WELCOME BACK ADMIN":"INVALID CREDENTIAL");
//alert(USERNAME==myUsername && PASSWORD==myPassword ?"WELCOME BACK ADMIN":"INVALID CREDENTIAL");

// let myAge=prompt('Enter your age');
// console.log(myAge>=18 && myAge<40 ?"You are valid for Voting":"Not then console you are too early or too late old for voting")
// alert(myAge>=18 && myAge<40 ?"You are valid for Voting":"Not then console you are too early or too late old for voting")


// console.log(2==2? "true":"false")


// let myValue1=(prompt('Enter a number'));
// let myValue2=(prompt('Enter a numbers'));
// let Result = myValue1/myValue2;
// console.log(Result>10 || Result< -1 ?"Resul is greater than 10 or less than -1 ":"result is greater than 10 or")

// const Number= 29;
// console.log(Number % 2 == 0 ?'Number is even':'Number is odd');

// ASSIGMENTS

//1 NUMBER

let myNumber=10;
console.log(myNumber % 2 == 0 ? 'myNumber is even' : 'myNumber is odd');

//2 NUMBER

let myNumber1=10;
let myNumber2=20;
console.log(myNumber1 > myNumber2 ?`${myNumber1}is greater than${myNumber2}` : `${myNumber1}is less than${myNumber2}`);

//3 NUMBER

console.log(myNumber1 < myNumber2 ?`${myNumber1}is greater than${myNumber2}` : `${myNumber1}is less than${myNumber2}`);

//4 NUMBER

let myValue=0;
console.log(myValue > 0 ? 'Positive' : myValue < 0 ? 'Negative' : 'Zero');

//5 NUMBER

let myNumber3=25;
console.log(myNumber3 % 5 === 0 ? 'divisible by 5' : 'not divisible by 5');

//6 NUMBER

let passMarks=30;
console.log(passMarks <= 28 ? 'pass' : 'fail');

//7 NUMBER

let myScore=100;
console.log(myScore > 90 ? 'A' : 'B');

//8 NUMBER

let myAge=18;
console.log(myAge>=18 && myAge<40 ?"You are valid for Voting":"Not then console you are too early or too late old for voting")

//9 NUMBER

let newYear=2025;
console.log(newYear % 4 === 0 ? 'leap year' : 'not a leap year');

//10 NUMBER

let myString=10;
console.log(myString === '10' ? 'empty' : 'not empty');

//11 NUMBER

let mathsSub=40
let physicsSub=44
let chemistrySub=45
let biologySub=50
let englishSub=55
console.log((mathsSub >=30 && physicsSub >=30 && chemistrySub >=30 && biologySub >=30 && englishSub >=30) ? 'eligible' : 'not eligible');

//12 NUMBER

let myUsername='admin';
let myPassword='12345';
console.log((myUsername === 'admin' && myPassword === '12345') ? 'login successful' : 'login failed');

//13 NUMBER

let hour1=21;
console.log(hour1 >= 6 && hour1 < 18 ? 'day' : 'night');

//14 NUMBER

let totalNumber=40;
console.log(totalNumber >= 40 ? 'pass' : 'fail');

//15 NUMBER

let myNumber4=7;
let isPrime=myNumber > 1 ;
console.log(isPrime ? 'prime' : 'not prime');