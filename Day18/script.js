// .....iteration...
// let myarray=['riya','priya','shreeya','anisha','sam'];
// for(let i=0; i<myarray.length;++){
//     console.log(myarray[i]);
// }

// let myNumbers=['10','20','30','40','50'];
// let sum=0;
// for( let index =0; index<myNumbers ;index++);{
//     sum=sum+myNumbers[index];
//     // console.log(myNumbers[index])
// }
// console.log(sum);

// let mylist=[100,101,102,103,104,105];
// let even=0;
// for(let index=0; index<mylist ;index++){
//     if(mylist[index]%2==0);
//     even=even+mylist[index];
// }
// console.log(even);

// let mynumber=[1000,500,30,200,400,300];
// let sum=0;
// for(let i=0; i<mynumber.length;i++){
//     if(mynumber[i]% 2 !=0);

// }
// console.log(mynumber)

// let number=[499,100,1000,2,10];
// let greatest=0;
// let smallest=number[0];
// for(let i=0; i<number.length;i++){
//     if(number[i]>greatest)
//         greatest=number[i];
//     if(number[i]<smallest)
//         smallest=number[i];  
// }
// console.log(greatest);
// console.log(smallest);

// WAP TO REVERSE AN ARRAY
// let number=[499,100,1000,2,10];
// let reversed=[];
// for(let index=0;index<number.length;index++){
//     reversed.unshift(number[i]);
// }
// console.log(reversed);

// ASSIGMENT

// push  (add to end)

// let listofstudent=['name','rollno','address']
// console.log(listofstudent[0]);
// console.log(listofstudent[1]);

// listofstudent.push('name');
// console.log(listofstudent[2]);

// POP  (delete from end and return)

// let listofname=['riya','priya','reha'];
// let popedvalue=listofname.pop();
// console.log(listofname);
// console.log(popedvalue);

// // SHIFT  (add to start)

// let removedvalue=listofname.shift();
// console.log(removedvalue);

// // UNSHIFT  (delete from start and return)

// listofname.unshift('added on first');
// console.log(listofname);

// // SLICE  (return a piece of array)

// let myarraychunk=myarray.slice(20,50); //(start,end -1),immutiable
// console.log(myarraychunk);
// console.log(myarraychunk);

// // SPLICE  (change original array)

// myarraychunk.splice(0,3); 
// console.log(myarraychunk);

// // ARRAY DETURCTION  (extracts values from an arrays into variable)

// let [first, , , fourth] =['ram','shyam','hari','sita'];
// console.log(first);
// console.log(fourth);

// ARRAY SPREAD  (... expands an array elements )

// let[First, second, ...rest]=['ram','shyam','hari','sita']
// console.log(...rest);

// // iteration  ()

// let myNumbers=['10','20','30','40','50'];
// let sum=0;
// for( let index =0; index<myNumbers ;index++);{
//     sum=sum+myNumbers[index];
// }
// console.log(sum);

// // odd number
// let oddnum=[100,200,104,103,202];
// let odd=1;
// for(let i=1;i>oddnum ; i++){
//     if(oddnum[i]%2==0);
//     odd=odd+oddnum[i]
// }
// console.log(odd);

// // even number
// let mylist=[100,101,102,103,104,105];
// let even=0;
// for(let index=0; index<mylist ;index++){
//     if(mylist[index]%2==0);
//     even=even+mylist[index];
// }
// console.log(even);

// // WAP TO REVERSE AN ARRAY
// let mynum=[499,100,1000,2,10];
// let reversed=[];
// for(let index=0;index<mynum.length;index++){
//     reversed.unshift(mynum[index]);
// }
// console.log(reversed);

// // find length of an array without using .length

// let myArray=[1,2,3,4,5,6,7,8,9];
// let length=0;
// let index=0;
// let element=myArray[index];

// while(element != undefined){
//     length++;
//     index++;
//     element=myArray[index];
// }
// console.log(length);

// ASSIGMENT


// 1)Print all elements of an array.
let elementArray=[5,10,15,20,25,30,35,40,45,50];
console.log(elementArray[0]);
console.log(elementArray[1]);
console.log(elementArray[2]);
console.log(elementArray[3]);
console.log(elementArray[4]);
console.log(elementArray[5]);
console.log(elementArray[6]);
console.log(elementArray[7]);
console.log(elementArray[8]);
console.log(elementArray[9]);
console.log(elementArray.length);


// 2. FIND THE LENGTH OF AN ARRAY WITHOUT USING A BUILT-IN FUNCTION
let numberArray=[10,20,30,40,50];
let count=0;
while(numberArray[length]!==undefined){
    length++;
}
console.log("length of the array:", length);


// 3. INSERT AN ELEMENT AT A SPECIFIC POSITION IN AN ARRAY

let myArray=[1,3,5,7,9,11,13,15];
let index=2;
let number=10;
let newArray=[];
for(let i=0; i<index; i++){
    newArray[i]=myArray[i];
}
newArray[index]=number;
for(let i=index; i<myArray.length; i++){
    newArray[i+1]=myArray[i];
}
console.log(newArray);


// 4. DELETE AN ELEMENT FROM AN ARRAY 

let deleteIndex=[1,2,3,4,5,6];
for(let i=deleteIndex; i<number.length -1; i++){
}
number.length= number.length - 1;
console.log('after deletion',number);

// 5. FIND THE SUM OF ALL ELEMENTS IN AN ARRAY

let sum=0;
for(let i=0; i < number.length; i++){
    sum += number[i];
}
console.log('sum:',sum);

// 6)Find the average of all elements in an array.
let array6=[10,20,30,40,50,60,70,80];
let Sum=0;
// let average=Sum / array6.length;
for(let i=0; i<array6.length; i++){
    Sum=Sum+array6[i];
}
let average=Sum / array6.length;
console.log("average:", average);

// 7)Find the maximum element in an array.
let numbersArray=[15,8,12,40,28,50];
let maximum=numbersArray[0];
for(let i=1; i<numbersArray.length; i++){
    if(numbersArray[i]>maximum){
        maximum=numbersArray[i];
    }
}
console.log("Maximum element:", maximum);

// 8)Find the minimum element in an array.
let numbeArray=[20,7,19,50,6,2];
let minimum=numbeArray[0];
for(let i=1; i<numbeArray.length; i++){
    if(numbeArray[i]<minimum){
        minimum=numbeArray[i];
    }
}
console.log("Minimum element:", minimum);

// 9)Reverse the elements of an array.
let numberArrays=[100,102,103,104,105];
let reverse=[];
for(let i=0;i<numberArrays.length;i++){
    reverse.unshift(numberArray[i]);
}
console.log("Reversed number:",reverse);

// 10) Count the number of positive and negative elements in an array.
let mynumberArray=[5,-2,8,7,-3,-14,12];
let positiveNumber=0;
let negativeNumber=0;
for(let i=0; i<mynumberArray.length;i++){
    if(mynumberArray[i]>0)positiveNumber++;
    else if(mynumberArray[i]<0)negativeNumber++;        
}
console.log("Positive Number:", positiveNumber);
console.log("Negative Number:", negativeNumber);

// 11) Count even and odd numbers in an array.
let numberList=[20,5,18,9,12,7,30];
let even=0;
let odd=1;
for(let index=0; index<numberList.length; index++ ){
    if(numberList[index]%2==0){
    even=even+numberList[index];
    }else if(myArray[index]%2!=0){
        odd=odd+numberList[index]; 
    }
}
console.log(even);
console.log(odd);

// 12)Find the second largest element in an array.
let largeArray=[10,20,50,80,8,7];
let largestNumber=-Infinity;
let secondLargestNumber=-Infinity;
for(let i=0;i<largeArray.length;i++){
    if(largeArray[i]>largestNumber){
        secondLargestNumber=largestNumber;
        largestNumber=largeArray[i];
    }else if (largeArray[i]>secondLargestNumber && largeArray[i]<largestNumber){
        secondLargestNumber=largeArray[i];
    }
}
console.log("second largest number:", secondLargestNumber);

// 13)Find the second smallest element in an array.
function secondSmallestNumber(arr){
let smallest= Infinity, second= Infinity;
for (let num of arr){
    if(num <smallest){
        second=smallest;
        smallest=num;
    }else if (num<second && num !==smallest){
        second=num;
    }
}
return second === Infinity ? null : second;
}
console.log("Second Smallest Number:",secondSmallestNumber([4,1,7,3,9]));

// 14)Copy all elements from one array to another.
let originalNumber=[5,8,10,15,18,20];
let copyNumber= originalNumber.slice();
console.log("Original number:", originalNumber);

// 15)Check if an array contains a specific element.
let array15=[2,5,7,10,13,15];
let hasTwo= array15.indexOf(2) !== -1;
console.log("specific element:", hasTwo);

// 16)Count the frequency of each element in an array.
let arrAy=[1,2,3,2,1,4,2];
let frequency={};
arrAy.forEach(item =>{
    frequency[item] = (frequency[item] || 0) + 1;
});
console.log("Frequency:", frequency);

// 17)Remove duplicate elements from an array.
const arrays=[1,2,3,2,4,5,4,8,10];
const uniqueArray=[...new Set(arrays)];
console.log("duplicate element:", uniqueArray);

// 18)Find the index of the first occurrence of a given element.
const arrayNUM = [1, 2, 3, 4, 5, 3];
const elementToFind = 3;
const firstIndex = arrayNUM.indexOf(elementToFind);
console.log("first occurrence:",firstIndex);

// 19) Find the index of the last occurrence of a given element.
const arr19 = [1, 2, 3, 4, 5, 8, 4];
const elementtoFind = 3;
const lastIndex = arr19.lastIndexOf(elementtoFind);
console.log("last occurence:",lastIndex); 

// 20) Merge two arrays into a third array.
const array20 = [2, 4, 6, 8, 10];
const swapArray = [...array20];
swapArray[0] = array20[array20.length - 1];
swapArray[array20.length - 1] = array20[0];
console.log("Third Array:",swapArray);


// 21)Swap the first and last elements of an array.
const arry21=[2,5,7,10,12,15];
if (arry21.length > 1){
    [arry21[0], arry21[arry21.length - 1]] = [arry21[arry21.length -1], arry21[0]];
}
console.log("First and Last Array:", arry21);

// 22)Shift all elements to the left by one position.
const array22=[1,3,5,7,9];
if(array22.length >1){
    const first = array22.shift();
    array22.push(first);
}
console.log("Left position:",array22);

// 23)Shift all elements to the right by one position.
const array23=[2,4,8,10,12,15];
if(array23.length>1){
    const last = array23.pop();
    array23.unshift(last);
}
console.log("Right position:", array23);

// 24)Check if an array is sorted (ascending or descending).
// function checkSortOrder(arr) {
//   let isAscending = true;
//   let isDescending = true;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) isAscending = false;
//     if (arr[i] > arr[i - 1]) isDescending = false;
//   }

//   if (isAscending) return "ascending";
//   if (isDescending) return "descending";
//   return "unsorted";
// }
// console.log(checkSortOrder([1, 2, 3, 4, 5,6]));     
// console.log(checkSortOrder([6, 5, 4, 3, 2, 1]));     
// console.log(checkSortOrder([1, 3, 2, 4, 6, 5])); 

// 25)Sort the array in ascending order.
const array25=[5,8,2,6,1,4];
array25.sort((a, b) => a-b);
console.log("Ascending order:", array25);

// 26)Sort the array in descending order.
let arr26 = [5, 3, 8, 1, 9];
arr26.sort((a, b) => b - a);
console.log("descending order:",arr26); 

// 27)Count the number of zeros in an array.
let array27 = [0, 1, 2, 0, 3, 0, 4];
let zeroCount = array27.filter(num => num === 0).length;
console.log("Number of Zeros:",zeroCount); 

// 28)Find the sum of elements at even indices.
let array28 = [10, 20, 30, 40, 50]; // Even indices: 0, 2, 4
let SUM = 0;
for (let i = 0; i < array28.length; i++) {
  if (i % 2 === 0) {
    SUM += array28[i];
  }
}
console.log("Even indices:",SUM); 

// 29)Find the sum of elements at odd indices.
let array29 = [10, 20, 30, 40, 50]; 
let amount = 0;
for (let i = 0; i < array29.length; i++) {
  if (i % 2 !== 0) {
    amount=amount+ array29[i];
  }
}
console.log("odd indices:",amount); 

// 30)Print all elements that are greater than a given number.
let array30 = [5, 10, 15, 20, 25];
let limitValue = 12;
let result = array30.filter(num => num > limitValue);
console.log("Greater than given number:",result); 

