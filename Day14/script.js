// ........SWITCH CASE.......
// EXACTLY SAME AS IF ELSE IF
// ONLY SYNTATIC SUGAR(ANOTHER SYNTAX FOR IF ELSE)

// let matched='name';
// switch(matched){
//     case 'address':
//         console.log('case for address match');
//         break;
//     case 'name':
//         console.log('case for name match');
//         break;
//     case 'number':
//         console.log('case for number match'); 
//         break;
    // deafult:
    // console.log('none of the case matched')
// }
// let num=number(prompt('match a days'));
// switch(num){
//     case 1:
//         console.log('case for sunday match')
//     case 2:
//         console.log('case for monday match')
//     case "3":
//         console.log('case for tuesday match')
//     case "4":
//      console.log('case for wed match')
//     case "5":
//         console.log('case for thur match')
//     case "6":
//         console.log('case for sunday match')
//     case "7":
//         console.log('case for sunday match')
//     default:
//         console.log('none of the case matched')                                                

// }

// let num1=prompt('enter first number');
// let num2=prompt('enter second number');
// let symbol=prompt('enter symbol (+,-,*,/,%)');
// switch(symbol){
//  case'+':
//     console.log(num1 + num2);
//     break;
// case'-':
//     console.log(num1 - num2);
//     break;
// case'*':
//     console.log(num1 * num2);
//     break;
// case'/':
// if(num2==0){
//     console.log('not divisible');
// }else{
//     console.log(num1 / num2);
// }
//     break;
// case'%':
//     console.log(num1 % num2);
//     break;
// default:
//     console.log('none of case matched');    
// }    

//  ASSIGMENT

let balance = 100000;
let choice;

do {
    choice = Number(prompt(
        "Welcome to the Bank Management System" +
        "1. Deposit Money" +
        "2. Withdraw Money" +
        "3. Check Balance" +
        "4. Exit" +
        "Enter your choice (1-4):"
    ));

    switch (choice) {
        case 1:
            let depositAmount = Number(prompt("Enter amount to deposit:"));
            if (depositAmount > 0) {
                balance += depositAmount;
                console.log("Rs." + depositAmount + " deposited successfully.New Balance: Rs." + balance);
            } else {
                console.log("Invalid deposit amount.");
            }
            break;

        case 2:
            let withdrawAmount = Number(prompt("Enter amount to withdraw:"));
            if (withdrawAmount > 0 && withdrawAmount <= balance) {
                balance -= withdrawAmount;
                console.log("Rs." + withdrawAmount + " withdrawn successfully.New Balance: Rs." + balance);
            } else if (withdrawAmount > balance) {
                console.log("Insufficient balance.");
            } else {
                console.log("Invalid withdrawal amount.");
            }
            break;

        case 3:
            console.log("Current Balance: Rs." + balance);
            break;

        case 4:
            console.log("Thank you for using our service!");
            break;

        default:
            console.log("Invalid choice. Please select from 1 to 4.");
            break;
    }

} while (choice !== 4);
