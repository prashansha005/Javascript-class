//........OPERATOR PRECEDENCE AND ASSOSIATIVITY.........
// console.log(10+40 / 12); //BDMAS(X)

// console.log(4* [5/100]);
// myVar=10;
// myVar = myVar + 1 + myVar++;

//1 0 0
//0 1 0
//----
//1 1 0 >= 6

//console.log(true || false && true);

//......CONDITIONAL STATEMENT....

//if else
//for loop
//while loop
//do while loop (3+ more after we complete array session);

// let userAge= Number(prompt('Enter your age'));
// if(userAge >= 18){
//     console.log('you are eligible');
// } else {
//     console.log('you are too early for')

// }

// let myNumber= Number(prompt('enter your first number'));
// let myNumbe2= Number(prompt('enter your second number'));
// if( myNumber >= myNumbe2){
//     console.log('first number is smallest');
// } else{
//     console.log('second number is smaller')
// }

// let myNumber=Number(prompt('enter your number'));
// if(myNumber%5==0){
// console.log('Divisible by 5');
// } else{
//     console.log('not divisible by 5');
// }

// let myNumber1=Number(prompt('Enter first price'));
// let myNumber2=Number(prompt('Enter second price'));
// let myNumber3=Number(prompt('Enter third price'));
// let myNumber4=Number(prompt('Enter fourth price'));
// let myNumber5=Number(prompt('Enter fifth price'));
// let priceNumber=myNumber1=myNumber2=myNumber3=myNumber4=myNumber5;
// if (priceNumber>=1000){
//     console.log('price with discount');
// } else{
//     console.log('price without discount');

// }

// let userNum=prompt('enter your day');
// if(userNum='Sunday' || userNum=='Saturday'){
//     console.log('the day is weekend');
// } else{
//     console.log('the day is not weekend');
// }

// let userTime=prompt('enter your time');
// if(userTime>=12){
// console.log(' the time is pm');
// }else{
// console.log('the time is am');
// }

// let myHeight=prompt('enter your height');
// let myWeight=prompt('enter your weight');
// let BMI=myWeight*myHeight/myHeight;
// if(BMI<=60){
//     console.log('healthy');
// }else{
//     console.log('unhealthy');
// }

let Variable = prompt("enter your character");
if (
  Variable == "!" ||
  Variable == "@" ||
  Variable == "#" ||
  Variable == "$" ||
  Variable == "%" ||
  Variable == "^" ||
  Variable == "&" ||
  Variable == "*" ||
  Variable == "(" ||
  Variable == ")"
) {
  console.log("correct");
} else {
  console.log("incorrect");
}
