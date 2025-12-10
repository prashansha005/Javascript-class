// Symbol
let MySymbol= Symbol('abc');
console.log(MySymbol);
// used to generate unique key (in object),will cover later
console.log(typeof MySymbol);

// null(no value)
let MyNullVariable=null;
console.log(typeof MyNullVariable);
// biggest bug in JS world

// type conversions
let myNumber ='10';
console.log(myNumber + 10);
// + is an operator polymorphism
let MyConvertedNumber = Number(myNumber);
console.log(MyConvertedNumber + 10);

// some tweaks (edge cases) while converting to number type

let myTweak = Number(true);
console.log(myTweak);
let myName = Number('10');
console.log(myName);

// let myBoolean1 = Boolean(""); //false
let myBoolean1 = Booleann('') //false
console.log(myBoolean1);

let myNumberBoolean = Boolean(1000);
console.log(myNumberBoolean);
// non zero value>true,zero>false

let myStringValue = String('prashansha, Neupane');
console.log(myStringValue);

// Pratice problem
// console.log(true + 1);

//  type coertion;
console.log('100'-20);
console.log('100' + 200);
