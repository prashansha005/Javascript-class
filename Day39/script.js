// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log("Fetched Posts:");
//     data.forEach((post) => console.log(post.title));

//     const postList = document.getElementById("postList");
//     data.forEach((post) => {
//       const li = document.createElement("li");
//       li.textContent = post.title;
//       postList.appendChild(li);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// class person {
//   name = "Prashansha";
//   address = "Butwal";
//   phoneNumber = "9746373848";
// }

// const person1 = new person();
// console.log(person1.name);
// console.log(person1.address);
// console.log(person1.phoneNumber);

//CONSTRUCTION

// construction(name, address, phoneNumber) {
// this.name= name;
// this.address=address;
// this.phoneNumber=phoneNumber;
// }

// let Person1 = new person('Prashansha','nepal','9746373848');
// let Person2 = new person('Prashanna','india','9746373849');

// class Animal {
//     name;
//     type;
//     scientificName;
// }

class student {
  name;
  id;
  subject;

  construction(name, id, subject) {
    this.name = name;
    this.id = id;
    this.subject = subject;
  }
}
let student1 = new student("Prashansha", "123", "science");
let student2 = new student("Prashanna", "456", "maths");
let student3 = new student("Prashansha", "123", "english");
let student4 = new student("Prashanna", "456", "mca");
let student5 = new student("Prashansha", "123", "bca");

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);
