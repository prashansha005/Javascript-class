// console.log('abc'+ null - true + false);
// console.log('20' - 10 + 200 - '30');
// console.log('abc' + true * 2);
// console.log('100'+200);
// console.log('bcd'+false*3);

// // TASK 

// // TASK A POSITIVE NUMBER INPUT FROM USER USING prompt, EXAMPLE "10"
// // CONVERT THAT INPut to negative number,example-10
// // console it 
// let userInput = Number(prompt("Enter any positive number"));
// console.log(-1*userInput);
// console.log(10-userInput);

// Take birth year like (2004/2005)from user
// output the actual age of the users like (18/19)and soon

// let userBirthYear= Number(prompt('Enter a date of birth'));
// console.log(2025- userBirthYear);
 
// let length=Number(prompt('enter a length'));
// let breadth=Number(prompt('enter a breadth'));
// let height=Number(prompt('enter a height'));
// let area= length*height*breadth;
// console.log(area);

// let diaMeter=Number(prompt("Enter Diameter of circle"));
// let radius = diaMeter/2;
// let pi= 3.14;
// let area = pi*radius*radius;
// console.log(area);
// let r=10;
// console.log(2*pi*r);

//Assignment

 //area and Perimeter of 
 let length = Number(prompt("Enter a length"));
 let PI = 3.14;
 let Diameter = Number(prompt("Enter Diameter"));
 let radius = Diameter/2;
 let Breadth = Number(prompt("Enter a Breadth"))
 let Height = Number(prompt("Enter a Height"))

 //Sphere
console.log("The Area of Sphere is " , 4*PI*radius*radius);
console.log("The perimeter of Sphere is " , 2*PI*radius);
 
 //square
console.log("The Area of Square is " , length*length);
console.log("The perimeter of Square is " , 4*length);

 //cone
console.log("The Area of Cone is " , (PI*radius * (length+radius)));
console.log("The perimeter of Cone is " , (2/PI*radius));

 //hemisphere
 console.log("The Area of Hemisphere is " , (3*PI*radius*radius));
 console.log("The perimeter Hemisphere is " , (2*PI*radius));

 //rectangle
 console.log("The Area of Rectangle is " , (length*Breadth));
console.log("The perimeter of Rectangle is " , 2*(length+Breadth) );

 //triangle
 console.log("The Area of Triangle is " , ((1/2)*Breadth*Height));
console.log("The perimeter of Triangle is " , (length+Breadth+Height));

