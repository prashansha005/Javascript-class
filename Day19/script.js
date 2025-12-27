// SORTING

// let toFind=3;
// let a = [1,2,1,3,4,5];
// console.log(a.includes(500));

// if(a.includes(toFind)){
//     console.log(`${toFind} exist in the array`);
// }else{
//     console.log(`${toFind} doesnot exist in the array`);
// }

// // ............OBJECTS.............

// let student = {
//     name:'prashansha',
//     age:'20',
//     country:'nepal',
//     number:'9746373848',
// };
// console.log(student.name);
// console.log(student.age);
// console.log(student.country);
// console.log(student.number);

// let anothername={
//     'first name':'anisha',
//     'last name':'chhantel',
// };
// console.log(anothername['first name']);
// console.log(anothername['last name']);


// let thirdobject={
//     name:'shreeya',
//     address:'manigram',
//     rollno:'26',
// };
// console.log(thirdobject);

// // SYNTAX: delete variable,propertyname

// delete thirdobject.name;
// console.log(thirdobject);

// let animalobject={
//     name:'snake',
//     type:'reptiles',
//     color:'brown',
//     ismammal:'false',
//     weight:120,
//     'has fur':'false',
// };
// console.log(animalobject.name);
// console.log(animalobject.type);
// console.log(animalobject.color);
// console.log(animalobject.ismammal);
// console.log(animalobject.weight);
// console.log(animalobject['has fur']);
// animalobject.weight=100;

// delete animalobject.color;
// console.log(animalobject);

// let personobject={
//     name:'anisha',
//     DOB:2005,
// };
// let age = 2025 - personobject.DOB;
// console.log(age);


// // ..............OBJECT DESTRUCTION.........

// syntax:
// let variablename={
//    key: value;
//    key: value
// }

// let{
//     address:myaddress, //alias
//     name,
//     doesnotexist,
// }={
//     // order doesnot matter
//     name:'anisha',
//     address:'manigram',

// };
// console.log(myaddress);

// ARRAY : STORING ORDER LIST OF ITEMS 
// OBJECTS : STORING KEY VALUES PAIRS (unppaired)

// ASSIGMENT

// 1 number

let person={
    name:'riyaa',
    age:20,
    city:'butwal',
};
console.log(person);

// 2 number

person.email='neupane.prashansha2005@gmail.com';
console.log(person);

// 3 number

person.city='New york';
console.log(person);

// 4 number

delete person.age;
console.log(person);

// 5 number

let book={};
console.log(book);

// 6 number

book.title='The Alchemist';
book.author='Paulo Coelho';
console.log(book);

// 7 number

console.log(person.name);

// 8 number

console.log(person['email']);

// 9 number

console.log('name' in person);
