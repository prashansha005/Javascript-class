// steps to follow while working with DOM

/** @type {HTMLHeadingElement} */

// steps to follow while working with DOM

//Select the html element through Document Object
//You can select with these methods:
//ClassName, ID, Tag Name, Parent Child Relationship

console.log(document);
console.log(typeof document);

const myParagraphTag = document.getElementById("Name");
console.log(myParagraphTag);

const ParagraphTag = document.getElementsByTagName("p");
console.log(ParagraphTag);

//
const BCA = document.getElementsByClassName("BCA")[1]; //->Node list
BCA.style.color = "red";
BCA.style.backgroundColor = "yellow";
BCA.style.fontSize = "30px";
BCA.style.padding = "30px";
BCA.textContent = "Nepathya College";
console.log(BCA);

//
const button = document.getElementById("myButton");

button.addEventListener("click", function () {
  const msg = prompt("Hello");
  alert(msg);
});

button.style.padding = "15px";
button.style.fontSize = "20px";
button.style.backgroundColor = "pink";
button.style.borderRadius = "50px";
button.style.border = "4px solid black";

//
const helloDiv = document.getElementsByClassName("Hello")[0];

helloDiv.innerHTML = `
  <h1>Hello, My Name is prashansha</h1>
  <p>Hello, My Name is prashansha</p>
`;

helloDiv.style.color = "red";

//
const paragraph = helloDiv.getElementsByTagName("p")[0];
paragraph.style.color = "green";
paragraph.style.fontSize = "20px";

console.log(helloDiv);

//
const div = document.createElement("div");
div.classList.add("mydiv");
document.body.appendChild(div);
