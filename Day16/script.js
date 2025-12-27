// .........BREAK AND CONTINUE.........

// for(let i=1; i<100; i++){
//     if(i%2==1){
//         continue;
//     }else{
//         console.log(i);
//     }
// }

// for(let i=1; i<100; i++){
//     if(i%2==0){
//         continue;
//     }else{
//         console.log(i);
//     }
// }

// for(let i=1; i<50; i++){
//     if(i%5==0){
//         continue;
//     }else{
//         console.log(i);
//     }
// }
// for(let i=1; i<=100; i++){
//     if(i%1==){
//         continue;
//     }else{
//         console.log(i);
//     }
// }
// let userInput = 5;
// let isPrime = true;
// for(let divide = 2; divide<=userInput - 1; divide++){
//     if(userInput % divide == 0){
//         isPrime = false;
//         break;
//     }
// }
// if(isPrime){
//     console.log('the num is prime');
// }else{
//     console.log('the num is not prime');
// }

//  ..........ARRAYS........

// let listofstudent = ["abc", "cde", "efg"];
// console.log(listofstudent[0]);
// console.log(listofstudent[1]);
// console.log(listofstudent[2]);

// listofstudent.push("hij");
// console.log(listofstudent);

// assigment;

// let listoffriends = ["riyaa", "priya", "sreeya", "pushpa", "sushma"];
// console.log(listoffriends[0]);
// console.log(listoffriends[1]);
// console.log(listoffriends[2]);
// console.log(listoffriends[3]);
// console.log(listoffriends[4]);

// listoffriends.push("june");
// console.log(listoffriends[5]);
// listoffriends.push("zoya");
// console.log(listoffriends[6]);
// listoffriends.push("jenisha");
// console.log(listoffriends[7]);
// listoffriends.push("prinju");
// console.log(listoffriends[8]);
// listoffriends.push("feela");
// console.log(listoffriends[9]);

let TwoDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(TwoDArray[0][0]);
console.log(TwoDArray[0][1]);
console.log(TwoDArray[0][2]);
console.log(TwoDArray[1][0]);
console.log(TwoDArray[1][0]);
console.log(TwoDArray[1][1]);
console.log(TwoDArray[1][2]);
console.log(TwoDArray[2][0]);
console.log(TwoDArray[2][1]);
console.log(TwoDArray[2][2]);

for (let i = 0; i <= 2; i++) {
  for (let j = 0; j <= 2; j++) {
    console.log(TwoDArray[i][j]);
  }
}

//  0 1 2
// 1 2 3 0 MYARRAY[ROW][COLUMN] console.log(MyArray[2][3])
//PRINT ALL ELEMENTS
