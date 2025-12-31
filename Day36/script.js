const uppercase = "ABCDEFGHIJKCLMNOPQRST";
const lowercase = "abcdefghijkmnolpqst";
const number = "1234567890";
const symbol = "!@#$%^&*()";
const length = 8;
const character = uppercase + lowercase + number + symbol;
let password = "";
const passwords = document.getElementById("password");
const button = document.getElementById("btn");
btn.addEventListener("click", () => {
  let password = "";
  for (let i = 0; i <= length; i++) {
    password =
      password + character[Math.floor(Math.random() * character.length)];
  }
  passwords.value = password;
});
const copycat = document.getElementById("copy");
copycat.addEventListener("click", () => {
  navigator.clipboard.writeText(password);
});

//sttp methods
//get post put patch delete

// ...........FETCH API.........(application programming interface)

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    return res.json();
  })
  .then((date) => {
    //data array
    //document.write(date[0].title);
    //inputselect
    //.text content
  });
