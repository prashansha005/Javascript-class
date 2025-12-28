let myperson={
    name: 'prashansha',
    from: 'butwal',
    email:'neupane.prashansha2005@gmail.com',
    phone:9746373848,
};
// console.log(myperson['name']);
// console.log(myperson['from']);
// console.log(myperson['email']);
// console.log(myperson['phone']);

// console.log(Object.values(myperson));
// console.log(Object.keys(myperson));

let myEntries=Object.entries(myperson);

for(let i=0; i<myEntries.length; i++){
    let [key,value]=myEntries[i];
    console.log(`${key}:${value}`);
}
let personlist={
    name:'anisha',
    location:'butwal',
    color:'green',
}
let personname={
    name:{
        firstname:'anisha',
        middlename:'kumari',
        secondname:'chhantel',
    },
    location:{
        permanent:'kathmandu',
        temporary:'butwal'
    },
    color:{
        item1:'blue',
        item2:'black',
        item3:'brown',
    },
    parential_info:{
        firstname:'anu',
        middlename:''
    }
}




//1.create a JavaScript object named student with the following structure:
// name (string)
// id (number)
// address (object): street, city, zip
// Faculty 
// course :courseName
// Subjects(object):subjectName,subjectCode(min6)
// contact (object): email, phone1,phone2

// ASSIGMENT
// 1. question
const student = {
  name: "prashansha neupane",
  id: 12345,
  address: {
    street: "bhaluhi",
    city: "butwal",
    zip: "2907"
  },
  faculty: "Science",
  course: {
    courseName: "Computer",
    department: "Science" ,
  },
  subjects: [
    { subjectName: "Mathematics", subjectCode: "CS1234" },
    { subjectName: "Physics", subjectCode: "CS1223" },

  // subject1:{
  //   { subjectName: "chemistry", subjectCode: "CS1234" },
  //   { subjectName: "biology", subjectCode: "CS1223" },

  // }  
  ],
  contact: {
    email: "neupane.prashansha2005@gmail.com",
    phone1: "+977-9746373848",
    phone2: "+977-9847059463"
  }
};

//2.Given the student object you created, how do you access the student’s zip code and the course grade?


const zipCode = student.address.zip;
console.log(zipCode); 

// Assuming the course grade is stored in the course object
const courseGrade = student.course.grade;
console.log(courseGrade); 

//3.Add a new nested property department inside the course object with the value "Science".


student.course.department = "Science";
console.log(student.course.department);

//4.Change the student’s email address inside the contact object to "student@example.com".

student.contact.email = "student@example.com";
console.log(student.contact.email);


//5.Remove the phone property from the contact object.
delete student.contact.phone1;
delete student.contact.phone2;
console.log(student.contact);