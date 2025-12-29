//.........FUNCTION EXPRESION CALLBACK FUNCTION FUNCTION AS FIRST CLASS CITIZENS.....

//FIRST CLASS CITIZEN
//FUNCTION CAN BE ASSIGNED TO A VARIABLE
//FUNCTION CAN BE PASSED AS AN ARGUMENT
//A FUNCTION CAN BE RETURN ANOTHER FUNCTION

//SEARCH ON GOOGLE AND LEARN ABOUT FIRST CLASS CITIZEN FEATURE

//1

let myFn = function (address) {
  console.log(`Hello ${address}`);
};
myFn("butwal");

//2

function food(fn) {
  //THIS IS CALLED CALLBACK FUNCTION
  fn();
}
function burger() {
  console.log("yummy");
}
food(burger);

//3

function Hello() {
  function fn() {
    console.log("say hello");
  }
  return fn;
}
let result = Hello();
result();

function factory5(fn) {
  fn();
}
function factory() {
  console.log("cement factory");
}
factory(factory5);

// function factory(num){
//     if(num==0){
//         return function (){
//         console.log('prashansha');
//     };
//    }else if (num==1){
//     return function(){
//     console.log('butwal');
// };

function factory(num) {
  if (num == 0) {
    return function () {
      console.log("My address is butwal");
    };
  } else if (num == 1) {
    return function () {
      console.log("My name is prashansha");
    };
  }
}

let res = factory(0);
res();
