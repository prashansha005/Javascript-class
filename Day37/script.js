// const firstNum = document.getElementById("firstNumber");
// const operator = document.getElementById("operator");
// const secondNum = document.getElementById("secondNumber");
// const input = document.getElementById("input");

// let randomNum1 = Math.floor(Math.random() * 10);
// let randomNum2 = Math.floor(Math.random() * 10);

// firstNum.textContent = randomNum1;
// secondNum.textContent = randomNum2;
// operator.textContent = "+";
// let ans = randomNum1 + randomNum2;

// function main() {
//   if (input.value == ans) {
//     console.log("Correct");
//   } else {
//     console.log("Not correct");
//   }
// }

// function filterProducts() {
//   const input = document.getElementById("searchInput").value.toLowerCase();
//   const cards = document.getElementsByClassName("product-card");

//   for (let i = 0; i < cards.length; i++) {
//     const title = cards[i]
//       .getElementsByTagName("h3")[0]
//       .innerText.toLowerCase();

//     if (title.includes(input)) {
//       cards[i].style.display = "block";
//     } else {
//       cards[i].style.display = "none";
//     }
//   }
// }

let container = document.getElementsByClassName("container")[0];

fetch("https://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let NewHTMLWithData = data.map((value) => {
      return `  
    <div class="product">
        <div class="product_image">
          <img
            src=${value.image}
            alt=""
          />
        </div>
        <div class="product_detail">
          <h1>${value.title.substring(0, 20)}</h1>
          <p class="description">
            ${value.description.substring(0, 100)}
          </p>
          <h3 class="price">$${value.price}</h3>
        </div>   
    </div>`;
    });
    container.innerHTML = NewHTMLWithData.join("");
  });
