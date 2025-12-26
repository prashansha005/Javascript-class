//......IF ELSE IF LADDER.....
// if(con1){
//     stat
// }else if(con2){
//     stat
// }else if(con3){
//     stat
// }else{
//     stat
// }

// let userGpa = prompt("Enter your gpa");

// if (userGpa<4 && userGpa>=3.7){
//     console.log("A");
// }else if (userGpa<3.7 && userGpa>=3.2){
//     console.log("B");
// }else if (userGpa<3.2 && userGpa>=2.8){
//     console.log("C");
// }else if (userGpa<2.8 && userGpa>=2){
//     console.log("D");
// }else if (userGpa<2 && userGpa>=1.8){
//     console.log("E");
// }else{
//     console.log("You are failed")
// }

// let userAge=prompt('Enter your age');
// if(userAge<30 && userAge>=20){
//     console.log('youngage');
// }else if(userAge<50 && userAge>=70){
//     console.log('oldage')
// }else{
//     console.log('death')
// }

// let userSalery=prompt('enter your salery');
// if(userSalery<50 && userSalery>=30){
//     console.log('20%');
// }else if(userSalery<30 && userSalery>=20){
//     console.log('10%')
// }else if(userSalery<20 && userSalery>=10){
//     console.log('5%');
// }
// else{
//     console.log(0%);
// }

// let userTime=prompt('enter your time');
// if(userTime<5 && userTime>=12){
//     console.log('pm');
// }else if(userTime<8 && userTime>=10){
//     console.log('am');
// }else if(userTime<5 && userTime>=10){
//     console.log('am');
// }

// let userSide=prompt('enter first side');
// let userSide1=prompt('enter second side');
// let userSide2=prompt('enter third side');
// if(userSide==userSide1&&userSide1==userSide2){
//     console.log('equilateral');
// } else if(userSide==userSide1||userSide1==userSide2||userSide==userSide2){
//     console.log('Isocelator')
// }else{
//     console.log('sclar');
// }

// let userWeight=prompt('enter a weight');
// let userHeight=prompt('enter a height');
// let BMI=('userWeight/userHeight*userHeight');
// if(BMI>50 && BMI<=0){
//     console.log('healthy')
// }else if(BMI>70 && BMI<=65){
//     console.log('unhealthy');
// }else{
//     console.log('obese')
// }

// let inputNumber1=Number(prompt('enter a first number'));
// let inputNumber2=Number(prompt('enter a second number'));
// let inputNumber3=Number(prompt('enter a third number'));
// if(inputNumber1>inputNumber2>inputNumber3){
//     console.log()
// }

//ASSIGMENT

// 1 NUMBER

let electricBill=prompt('enter anumber');
if(electricBill<100){
    console.log('electricBill*1.5}');
}else if (electricBill>=100 && electricBill <=300){
    console.log('electricBill*2');
}else{
    console.log('electricBill*3');
}

//2 Number

let dataUsage=prompt('enter a use');
if(dataUsage<50){
    console.log('normal use');
} else if(dataUsage<=90){
    console.log('warning');
}else{
    console.log('over limit');
}

//3 Number

let yearRate=prompt('enter a year');
if(yearRate<1){
    console.log('5 percent');
}else if(yearRate<=3){
    console.log('6.5 percent');
}else{
    console.log('7.5 percent');
}

//4 number

let creditScore=prompt('enter a score');
if(creditScore >= 750){
    console.log('loan approved');
}else{
    console.log('loan not approved');
}

//5 number

let stdPercent=prompt('enter a percent');
if(stdPercent>=90){
    console.log('excellent');
}else{
    console.log('improve');
}

//6 number

let busDistance=prompt('enter a distance');
if(busDistance < 10){
    console.log('shipping charge will be zero');
}else if(busDistance <= 50){
    console.log('shipping charge will be 50');
}else{
    console.log('shipping charge will be 100');
}

//7 number

let speed=prompt('enter a speed');
if(speed>=100){
    console.log('fast');
}else{
    console.log('slow');
}
// 8 number
let cPu=(prompt('enter temp'));
if (cPu<50){
    console.log('safe');
} else if(cPu>50 && cPu<75){
    console.log('warm');
} else { 
    console.log('danger');

}
// 9 number
let bodyTemp=(prompt('enter a number'));
if (bodyTemp<36){
    console.log('low');
} else if(bodyTemp>36 && bodyTemp<37.5){
    console.log('normal');
} else {
    console.log('fever');
}
// 10 number
let  credit=prompt('enter card');
if (credit== billpaid){
    console.log('active');
} else if( credit==payment){
    console.log('warning');
} else {
    console.log('blocked');
}
// 11 number
let userCode=(prompt('Enter your Status Code'));
if(userCode <0 && userCode>=0){
    console.log('Ordered');
}else if(userCode<1 && userCode>=0 ){
    console.log('Packed');
}else if(userCode <2 && userCode>=1 ){
    console.log('Shipped');
}else if(userCode<3 && userCode >=2 ){
    console.log('Delivered');
}else{
    console.log('Invalid status ');
}

// 12 number
let version=(prompt('enter version'));
if(version<2){
    console.log('oudated');
} else if(version>2 && version<3){
    console.log('compatible');
} else {
    console.log('beta feature required');
}
// 13 number
let licence=(prompt('enter age'));
if (licence<18){
    console.log('ineligible');
} else if( licence>18 && licence<65){
    console.log('eligible');
} else{
    console.log('renewal required');
}
// 14 number
let fuel=(prommpt('enter number'));
if (fuel>=20){
    console.log('excellent');
} else if(fuel>15 && fuel<20){
    console.log('good');
} else {
    console.log('poor');
}
// 15 number
let signal=(prompt('enter a number'));
if (signal==0 && signal==1){
    console.log('weak');
} else if(signal==3&& signal==2){
    console.log('medium');
} else{
    console.log('strong');
}
// 16 number
let userCPu=(prompt('enter temp'));
if (userCPu<50){
    console.log('safe');
} else if(userCPu>50 && userCPu<75){
    console.log('warm');
} else { 
    console.log('danger');

}
// 17 number
let bodyTempe=(prompt('enter a number'));
if (bodyTempe<36){
    console.log('low');
} else if(bodyTempe>36 && bodyTempe<37.5){
    console.log('normal');
} else {
    console.log('fever');
}
// 18 number
let  credits=prompt('enter card');
if (credits== billpaid){
    console.log('active');
} else if( credits==payment){
    console.log('warning');
} else {
    console.log('blocked');
}
// 19 number
let onlineService=(prompt('enter order'));
if (online==0){
    console.log('odered');
} else if(onlineService==1){
    console.log('packed');
} else if(onlineService==shipped){
    console.log('delivered');
} else{
    console.log('invalid status');
}
// 20 number
let Version=(prompt('enter version'));
if(version<2){
    console.log('oudated');
} else if(Version>2 && Version<3){
    console.log('compatible');
} else {
    console.log('beta feature required');
}
// 21 number
let userlicence=(prompt('enter age'));
if (userlicence<18){
    console.log('ineligible');
} else if( userlicence>18 && userlicence<65){
    console.log('eligible');
} else{
    console.log('renewal required');
}
// 22 number
let fuels=(prommpt('enter number'));
if (fuels>=20){
    console.log('excellent');
} else if(fuels>15 && fuels<20){
    console.log('good');
} else {
    console.log('poor');
}
// 23 number
let signalUser=(prompt('enter a number'));
if (signalUser==0 && signal==1){
    console.log('weak');
} else if(signalUser==3&& signalUser==2){
    console.log('medium');
} else{
    console.log('strong');
}
//24 number

let waterQuality=(prompt('enter a quality'));
if(waterQuality<=50 && waterQuality>0){
    console.log('good');  
}else if(waterQuality>=51 && waterQuality<60){
    console.log('moderate');
}else if(waterQuality>101 && waterQuality<200){
    console.log('unhealthy');
}else {
    console.log(dangerous);

}

//25 number

let Fuel=(prompt('enter a number'));
if(Fuel>=20){
    console.log('excellent');
}else if(fuel<20 && fuel>=0){
    console.log('good');
}else{
    console.log('not good');
}

//26 Number

let competion=(prompt('enter a time'));
if(competion<3 && competion>0){
    console.log('elite');
}else if( competion<5 && competion >=3){
    console.log('average');
}else{
    console.log('slow');
}

//27
let passed=(prompt('enter a marks'));
if(passed<70 && passed>0){
    console.log('excelent');
}else if( passed<25 && passed >=10){
    console.log('pass');
}else{
    console.log('fail');
}


