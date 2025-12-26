// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');
// console.log('prashansha');

//.....loop.....
//syntax: for(in)

// let myName='prashansha';
// for(count=1; count<=20; count++);
// console.log(myName);

// for(let name=100; name>=1;name--){ 
//     console.log(name);
// }

// for(let even=0; even<=100; even+=2){
//     console.log(even)
// }

// for(let odd=1;odd<=100; odd+=2){
//     console.log(odd)
// }
// for(let num=1;num<=100;num++){
//     console.log
// }

// let num1 =prompt('enter a first number');
// let num2 =prompt('enter a second number');
// for(let count= num1; count<=num2; count++){
//     if(count % 2==1);
//     console.log(count);
// }

// for(let num=1; num<=10; num++){
// console.log(`5 X ${num}= ${5* num}`);
// }

//Assigment

//odd number

// let number1=Number(prompt('enter a first number'));
// let number2=Number(prompt('enter a second number'));
// let sum=0;
// for(let count=number1; count<=number2;count++){
//     if(count % 2 ==1){
//         sum+=count;
//     }
// }
//  console.log(`sum of odd numbers between ${number1} and ${number2}:${sum}`);

// //even number

// let num1=Number(prompt('enter first number'));
// let num2=Number(prompt('enter second number'));
// let Sum=0;
// for(let count=num1; count<=num2;count++){
//     if(count % 2 == 0){
//         sum += count;
//     }
// }
// // console.log(`sum of even numbers between ${num1} and ${num2} and:${sum}`);

// ASSIGMENT

// NUMBER 1

let num=Number(prompt('bill'));
for (let i=0; i<num; i++){
    if (num<=100){
        console.log('your bill is 0');
    }
    else if (num>100 && num<=200){
        console.log('your bill is 100');
    }
    else if (num>200 && num<=300){
        console.log('your bill is 200');
    }
    else if (num>300 && num<=400){
        console.log('your bill is 300');
    }
    else if (num>400 && num<=500){
        console.log('your bill is 400');
    }
    else{
        console.log('your bill is 500');
    }
}

// NUMBER 2

let int=Number(prompt('internet data usage'));
for (let i=0; i<int; i++){
    if (int<50){
        console.log('normal');
    }
    else if (int>50 && int<=100){
        console.log('warning');
    }
    else if (int>100 && int<=150){
        console.log('over limit');
    }
    
    else{
        console.log('exceeded limit');
    }
}

// NUMBER 3

let month=Number(prompt('enter month number'));
for (let i=0; i<month; i++){
    if (month==1 || month==2 || month==3){
        console.log('winter');
    }
    else if (month==4 || month==5 || month==6){
        console.log('spring');
    }
    else if (month==7 || month==8 || month==9){
        console.log('summer');
    }
    else if (month==10 || month==11 || month==12){
        console.log('autumn');
    }
    else{
        console.log('invalid month');
    }
}

//NUMBER 4

let bank=Number(prompt('enter bank interest rate'));
for (let i=0; i<bank; i++){
    if (bank<=5){
        console.log('low interest');
    }
    else if (bank>5 && bank<=10){
        console.log('medium interest');
    }
    else if (bank>10 && bank<=15){
        console.log('high interest');
    }
    else{
        console.log('very high interest');
    }
}

//NUMBER 5

let movie=Number(prompt('enter movie rating'));
for (let i=0; i<movie; i++){
    if (movie<=2){
        console.log('bad');
    }
    else if (movie>2 && movie<=4){
        console.log('average');
    }
    else if (movie>4 && movie<=6){
        console.log('good');
    }
    else if (movie>6 && movie<=8){
        console.log('very good');
    }
    else{
        console.log('excellent');
    }
}

//NUMBER 6

let credit=Number(prompt('enter credit score'));
for (let i=0; i<credit; i++){
    if (credit<=600){
        console.log('loan not approved');
    }
    else if (credit>600 && credit<=750){
        console.log('loan approved with high interest');
    }
    else if (credit>750 && credit<=800){
        console.log('loan approved with medium interest');
    }
    else{
        console.log('loan approved with low interest');
    }
}

// NUMBER 7

let distance=Number(prompt('enter distance'));
for (let i=0; i<distance; i++){
    if (distance<=10){
        console.log('shipping charge is 5');
    }
    else if (distance>10 && distance<=20){
        console.log('shipping charge is 10');
    }
    else if (distance>20 && distance<=30){
        console.log('shipping charge is 15');
    }
    else{
        console.log('shipping charge is 20');
    }
}

//NUMBER 8

let marks=Number(prompt('enter marks'));
for (let i=0; i<marks; i++){
    if (marks<=40){
        console.log('fail');
    }
    else if (marks>40 && marks<=60){
        console.log('pass');
    }
    else if (marks>60 && marks<=80){
        console.log('good');
    }
    else{
        console.log('excellent');
    }

}

//NUMBER 9

let speed=Number(prompt('enter typing speed'));
for (let i=0; i<speed; i++){
    if (speed<=20){
        console.log('slow');
    }
    else if (speed>20 && speed<=40){
        console.log('average');
    }
    else if (speed>40 && speed<=60){
        console.log('fast');
    }
    else{
        console.log('very fast');
    }
}

//NUMBER 10

let test=Number(prompt('enter test score'));
for (let i=0; i<test; i++){
    if (test<=50){
        console.log('beginner');
    }
    else if (test>50 && test<=70){
        console.log('intermediate');
    }
    else if (test>70 && test<=90){
        console.log('advanced');
    }
    else{
        console.log('expert');
    }
}

//NUMBER 11

let income=Number(prompt('enter income'));
for (let i=0; i<income; i++){
    if (income<=250000){
        console.log('no tax');
    }
    else if (income>250000 && income<=500000){
        console.log('5% tax');
    }
    else if (income>500000 && income<=1000000){
        console.log('10% tax');
    }
    else{
        console.log('20% tax');
    }
}

// NUMBER 12

let water=Number(prompt('enter water quality index'));
for (let i=0; i<water; i++){
    if (water<=50){
        console.log('good');
    }
    else if (water>50 && water<=100){
        console.log('average');
    }
    else if (water>100 && water<=150){
        console.log('poor');
    }
    else{
        console.log('very poor');
    }
}

//NUMBER 13

let age=Number(prompt('enter age'));
for (let i=0; i<age; i++){
    if (age<18){
        console.log('not eligible to vote');
    }
    else if (age>=18 && age<=25){
        console.log('eligible to vote');
    }
    else if (age>25 && age<=35){
        console.log('eligible to vote');
    }
    else{
        console.log('eligible to vote');
    }
}

//NUMBER 14

let app=Number(prompt('enter app rating'));
for (let i=0; i<app; i++){
    if (app<=2){
        console.log('poor');
    }
    else if (app>2 && app<=4){
        console.log('average');
    }
    else if (app>4 && app<=6){
        console.log('good');
    }
    else if (app>6 && app<=8){
        console.log('very good');
    }
    else{
        console.log('excellent');
    }
}

//NUMBER 15
let coffee=Number(prompt('enter coffee strength'));
for (let i=0; i<coffee; i++){
    if (coffee<=2){
        console.log('weak');
    }
    else if (coffee>2 && coffee<=4){
        console.log('medium');
    }
    else if (coffee>4 && coffee<=6){
        console.log('strong');
    }
    else{
        console.log('extra strong');
    }
}
//NUMBER 16

let bus=Number(prompt('enter age'));
for (let i=0; i<bus; i++){
    if (bus<=5){
        console.log('free');
    }
    else if (bus>5 && bus<=12){
        console.log('half fare');
    }
    else if (bus>12 && bus<=60){
        console.log('full fare');
    }
    else{
        console.log('senior citizen fare');
    }
}

//NUMBWR 17

let subscription=Number(prompt('enter subscription type'));
for (let i=0; i<subscription; i++){
    if (subscription==1){
        console.log('basic');
    }
    else if (subscription==2){
        console.log('standard');
    }
    else if (subscription==3){
        console.log('premium');
    }
    else{
        console.log('invalid subscription type');
    }
}

//NUMBER 18

let game=Number(prompt('enter game difficulty level'));
for (let i=0; i<game; i++){
    if (game==1){
        console.log('easy');
    }
    else if (game==2){
        console.log('medium');
    }
    else if (game==3){
        console.log('hard');
    }
    else{
        console.log('invalid game difficulty level');
    }
}

//NUMBER 19

let bp=Number(prompt('enter blood pressure'));
for (let i=0; i<bp; i++){
    if (bp<120){
        console.log('normal');
    }
    else if (bp>=120 && bp<=139){
        console.log('elevated');
    }
    else if (bp>=140 && bp<=159){
        console.log('high blood pressure stage 1');
    }
    else{
        console.log('high blood pressure stage 2');
    }
}


//NUMBER 20

let battery=Number(prompt('enter battery level'));
for (let i=0; i<battery; i++){
    if (battery<=20){
        console.log('low battery');
    }
    else if (battery>20 && battery<=50){
        console.log('medium battery');
    }
    else if (battery>50 && battery<=80){
        console.log('good battery');
    }
    else{
        console.log('full battery');
    }
}

//NUMBER 21

let cpu=Number(prompt('enter cpu temperature'));
for (let i=0; i<cpu; i++){
    if (cpu<=50){
        console.log('normal');
    }
    else if (cpu>50 && cpu<=70){
        console.log('warning');
    }
    else if (cpu>70 && cpu<=90){
        console.log('overheating');
    }
    else{
        console.log('critical temperature');
    }
}

//NUMBER 22

let body=Number(prompt('enter body temperature'));
for (let i=0; i<body; i++){
    if (body<=36.5){
        console.log('normal');
    }
    else if (body>36.5 && body<=37.5){
        console.log('slightly elevated');
    }
    else if (body>37.5 && body<=38.5){
        console.log('fever');
    }
    else{
        console.log('high fever');
    }
}

//NUMBER 23

let creditcard=Number(prompt('enter credit card status'));
for (let i=0; i<creditcard; i++){
    if (creditcard==1){
        console.log('active');
    }
    else if (creditcard==2){
        console.log('inactive');
    }
    else if (creditcard==3){
        console.log('blocked');
    }
    else{
        console.log('invalid credit card status');
    }
}

//NUMBER 24

let order=Number(prompt('enter order status code'));
for (let i=0; i<order; i++){
    if (order==1){
        console.log('pending');
    }
    else if (order==2){
        console.log('shipped');
    }
    else if (order==3){
        console.log('delivered');
    }
    else{
        console.log('invalid order status code');
    }
}
//NUMBER 25

let driving=Number(prompt('enter age'));
for (let i=0; i<driving; i++){
    if (driving<18){
        console.log('not eligible for driving licence');
    }
    else if (driving>=18 && driving<=25){
        console.log('eligible for learning licence');
    }
    else if (driving>25 && driving<=35){
        console.log('eligible for permanent licence');
    }
    else{
        console.log('eligible for senior citizen licence');
    }
}

//NUMBER 26

let signal=Number(prompt('enter signal strength'));
for (let i=0; i<signal; i++){
    if (signal<=20){
        console.log('weak signal');
    }
    else if (signal>20 && signal<=50){
        console.log('average signal');
    }
    else if (signal>50 && signal<=80){
        console.log('good signal');
    }
    else{
        console.log('excellent signal');
    }
}

//NUMBER 27

let room=Number(prompt('enter room size'));
for (let i=0; i<room; i++){
    if (room<=10){
        console.log('small room');
    }
    else if (room>10 && room<=20){
        console.log('medium room');
    }
    else if (room>20 && room<=30){
        console.log('large room');
    }
    else{
        console.log('extra large room');
    }
}

//NUMBER 28

let marathon=Number(prompt('enter marathon completion time'));
for (let i=0; i<marathon; i++){
    if (marathon<=2){
        console.log('excellent');
    }
    else if (marathon>2 && marathon<=3){
        console.log('good');
    }
    else if (marathon>3 && marathon<=4){
        console.log('average');
    }
    else{
        console.log('poor');
    }
}
//NUMBER 29

let weather=Number(prompt('enter temperature'));
for (let i=0; i<weather; i++){
    if (weather<=0){
        console.log('snowy');
    }
    else if (weather>0 && weather<=15){
        console.log('cold');
    }
    else if (weather>15 && weather<=25){
        console.log('pleasant');
    }
    else{
        console.log('hot');
    }
}

//NUMBER 30

let used=Number(prompt('enter body temperature'));
for (let i=0; i<used; i++){
    if (used<=36.5){
        console.log('normal');
    }
    else if (used>36.5 && used<=37.5){
        console.log('slightly elevated');
    }
    else if (used>37.5 && used<=38.5){
        console.log('fever');
    }
    else{
        console.log('high fever');
    }
}
//number 31

let exam=Number(prompt('enter a number'))
for(let i=0; i>=80; i++){
    if(exam<=80){
        console.log(average);
    }
    else if(exam>50 && exam<=49){
        console.log(low)
    }
    else{
        console.log('fail');
    }
}
