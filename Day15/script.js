// QUESTION pratice
// 1 NUMBER 

let months=Number(prompt('enter a number'));
switch(months){
    case 1:
        console.log('Baishak');
        break;
    case 2:
        console.log('jestha');
        break;
    case 3:
        console.log('ashar');
        break;
    case 4:
        console.log('shrawan');
        break;
    case 5:
        console.log('Bhadra');
        break;
    case 6:
        console.log('aswin');
        break;
    case 7:
        console.log('kartik');
        break;
    case 8:
        console.log('mangsir');
        break;
    case 9:
        console.log('poush');
        break;
    case 10:
        console.log('magh');
        break;
    case 11:
        console.log('falgun');
        break;
    case 12:
        console.log('chaitra');
        break;
        default:
            console.log('none of the months matched');

}

// 2 Number

let vowel=Number(prompt('enter a number'));
switch(vowel){
    case 'a':
        console.log('vowel');
        break;
    case 'e':
        console.log('vowel');
        break;
    case 'i':
        console.log('vowel');
        break;
    case 'o':
        console.log('vowel');
        break;
    case 'u':
        console.log('vowel');
        break;

    default:
        console.log('consonat')    
} 

// 3 Number

let marks=Number(prompt('enter a number'));
switch(marks){
    case 'A':
        console.log('EXCELLENT');
        break;
    case 'B':
        console.log('VERY GOOD');
        break;
    case 'C':
        console.log('GOOD');
        break;
    case 'D':
        console.log('SATISFIED');
        break;
    case 'E':
        console.log('POOR');
        break;
    case 'F':
        console.log('VERY POOR');
        break;
        default:
            console.log('not defined');

}
// 4 number
let signal=prompt('enter a signal');
switch(signal){
    case 'red':
        console.log('EXCELLENT');
        break;
    case 'yellow':
        console.log('VERY GOOD');
        break;
    case 'green':
        console.log('GOOD');
        break;
        default:
            console.log('stop');
}        

//5 Number
let num=prompt('enter a number');
switch(num){
    case '0':
        console.log('zero');
        break;
    case '1':
        console.log('one');
        break;
    case '2':
        console.log('two');
        break;
    case '3':
        console.log('three');
        break;
    case '4':
        console.log('four');
        break;
    case '5':
        console.log('fifth');
        break;
    case '6':
        console.log('sixth');
        break;
    case '7':
        console.log('seventh');
        break;
    case '8':
        console.log('eight');
        break;
    case '9':
        console.log('nine');
        break;
    
        default:
            console.log('not defined');

}
// 6 number
let week=prompt('enter a week');
switch(week){
    case 'sunday':
        console.log('weekday');
        break;
    case 'monday':
        console.log('weekday');
        break;
    case 'tuesday':
        console.log('weekday');
        break;
    case 'wednesday':
        console.log('weekday');
        break;
    case 'thursday':
        console.log('weekday');
        break;
    case 'friday':
        console.log('weekday');
        break;
    case 'saturday':
        console.log('weekend');
        break;
        default:
            console.log('not a day');
}
// 14 number
let age=prompt('enter a age');
switch(age){
    case '12':
        console.log('child');
        break;
    case '14':
        console.log('teen');
        break;
    case '20':
        console.log('adult');
        break;
    case '70':
        console.log('senior');
        break;
        default:
            console.log(death);
}
//8 number
 let area=prompt('enter a area');
 let radius=prompt('enter a radius');
 let length=prompt('enter a length');
 let heigth=prompt('enter a height');
 const PI=3.7;
switch(area){
    case 'rectangle':
        console.log('l*b');
        break;
    case 'traingle':
        console.log('PI*r*r');
        break;
    case 'square':
        console.log('l*l');
        break;
        default:
            console.log("not saved")
} 
// 16 number
let Months=prompt('enter a months');
switch(Months){
    case 'Jan':
        console.log('31');
        break;
    case 'feb':
        console.log('28');
        break;
    case 'mar':
        console.log('31');
        break;
    case 'apr':
        console.log('30');
        break;
    case 'may':
        console.log('31');
        break;
    case 'jun':
        console.log('30');
        break;
    case 'jul':
        console.log('31');
        break;
    case 'aug':
        console.log('31');
        break;
    case 'sep':
        console.log('31');
        break;
    case 'oct':
        console.log('30');
        break;
    case 'nov':
        console.log('30');
        break;
    case 'dec':
        console.log('31');
        break;
    
        default:
            console.log('not defined');

}
// 11 number
let language=prompt('enter a language');
switch(language){
    case 'En':
        console.log('hello');
        break;
    case 'FR':
        console.log('bonjour');
        break;
    case 'SP':
        console.log('hola');
        break;
    default:
        console.log('language not found');         
}
// 12 answer
// let currency=prompt('enter a currency');
// amount=100;
// switch(currency){

// }

// 13 number
let num1=prompt('enter a first number');
let num2=prompt('enter a second number');
let symbol=prompt('enter a symbol(+,-,*,/)');
switch(symbol){
    case '+':
        console.log('add');
        break;
    case '-':
        console.log('sub');
        break;
    case '*':
        console.log('multi');
        break;
    case '/':
        console.log('div');
        break;
        default:
            console.log('none of the case matched');            
}

// 15 number
let os=prompt('enter a system')
switch(os){
    case 'windows':
        console.log('using windows');
        break;
    case 'macos':
        console.log('using macos');
        break;
    case 'linux':
        console.log('using linux');
        break;
        default:
            console.log('none of the case matched');       
}
//16 number 
let month=prompt('enter a months');
switch(month){
    case 'dec':
    case 'jan':
    case 'feb':
        console.log('winter');
        break;
    case 'mar':
    case 'apr':
    case 'may':
        console.log('spring');
        break;
    case 'jun':
    case 'jul':
    case 'aug':
        console.log('summer');
        break;
    case 'sep':
    case 'oct':
    case 'nov':
        console.log('fall');
        break;
        default:
            console.log('invalid month');                                            
}
// 17 number
let sport=prompt('enter a game');
switch(sport){
    case 'football':
        console.log('played with 11 palayers on each team');
        break;
    case 'cricket':
        console.log('played with bat and ball');
        break;
        default:
            console.log('sport not found');
}
// 18 number
let planet=prompt('enter a planet name');
switch(planet){
    case 'mercury':
        console.log('closest planet to the sun');
        break;
    case 'venus':
        console.log('hottest planet in the solar system');
        break;
    case 'earth':
        console.log('planet in our solar system known to have life');
        break;
    case 'mars':
        console.log('known as the red planet');
        break;
    case 'jupiter':
        console.log('largest planet in our solar system');
        break;
    default:
        console.log('unknown planet');                    
}
// 19 number
let item=prompt('enter a menu');
switch(item){
    case 'chicken biryani':
        console.log('price:Rs 550.00');
        break;
    case 'butter chicken':
        console.log('price:Rs 450.00');
        break;
    case 'chicken momo':
        console.log('price:Rs 150.00');
        break;
    case 'chicken pepperoni':
        console.log('price Rs 829.00')            
    }
// 20 number
let unit=prompt('enter a amount');
let rate;
let bill=unit * rate;
switch(unit){
    case 'unit <= 100':
        rate=1.5;
        break;
    case 'unit <= 200':
        rate=2.5;
        break;
    case 'unit >= 300':
        rate=5;
        break;        
}
console.log(`total bill for ${unit} unit:$${billtofixed(2)}`);

// 21 number
let countryCode=prompt('enter a code');
let income=prompt('enter a income');
let taxRate;
switch(countryCode){
    case 'USA':
        taxRate=0.1;
        break;
    case 'UK':
        taxRate=0.2;
        break;
    case 'IN':
        taxRate=0.15;
        break;
    default:
        taxRate=0;            
}
let tax=income * taxRate;
console.log(`tax for${countryCode}:$${taxtofixed}`);

// 22 answer
let department=prompt('enter a academic department');
switch(department){
    case 'computer':
        console.log('learn programming, algorithms,and data');
        break;
    case 'maths':
        console.log('study problem sloving');
        break;
    case 'physics':
        console.log('study energy motion and laws of nature');
        break;
        default:
            console.log('department not found');        
}
// 23 answer
let username=prompt('enter a username');
let password=prompt('enter a password');
switch(username){
    case 'admin':
        if(password === 'admin123'){
            console.log('welcome admin');
        }else{
            console.log('incorrect password');
        }
        break;
    case 'teacher':
        if(password === 'teacher123'){
            console.log('welcome teacher');
        }else{
            console.log('incorrect password');
        }
        break;    
    case 'student':
        if(password === 'student123'){
            console.log('welcome student');
        }else{
            console.log('incorrect password');
        }
        break;  
        default:
            console.log('invalid username');        
}
// 24 answer
let coupon=prompt('enter a coupon code');
let totalamount=prompt('enter a total amount');
switch(coupon){
    case 'save Rs 10':
        discount=totalamount * 0.1;
        break;
    case 'save Rs 20':
        discount=totalamount * 0.2;
        break;
    case 'freeshipping':
        discount= 0;
        break;
        default:
            discount=0;
            console.log('invalid coupon code');        
}
if(discount > 0){
    console.log(`discount applied:$${discount.tofixed(2)}`);
    console.log(`final amount : $${(totalamount - discount).tofixed(2)}`);
}
// 25 answer
let flightClass=prompt('enter a flight class');
switch (flightClass){
  case 'economy':
    console.log("Economy Class: Basic seat, limited services.");
    break;
  case 'business':
    console.log("Business Class: Spacious seats, premium meals.");
    break;
  case 'first':
    console.log("First Class: Luxury seating, exclusive services.");
    break;
  default:
    console.log("Invalid flight class");
}
// 26 number
let option=prompt('enter an option');
switch (option) {
  case 1:
    console.log("You selected Billing. Please wait while we connect you...");
    break;
  case 2:
    console.log("You selected Technical Support. Connecting to a technician...");
    break;
  case 3:
    console.log("You selected General Inquiry. Please hold for a representative...");
    break;
  default:
    console.log("Invalid option. Please try again.");
}
// 27 number
let genre=prompt('enter a genre');
switch(genre) {
  case 'action':
    console.log("Action movies are packed with excitement and high-energy scenes.");
    break;
  case 'comedy':
    console.log("Comedy movies aim to make the audience laugh with humor.");
    break;
  case 'horror':
    console.log("Horror movies are designed to scare and thrill viewers.");
    break;
  case 'drama':
    console.log("Drama movies focus on emotional storytelling and character development.");
    break;
  default:
    console.log("Genre not recognized.");
}


