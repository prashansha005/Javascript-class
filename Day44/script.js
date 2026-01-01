const emailBox = document.getElementById("email");
const PasswordBox = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

const emailErrorField = document.getElementById("emailError");
const passwordErrorField = document.getElementById("passwordError");

submitBtn.addEventListener("click", function () {
  const emailValue = emailBox.value;
  const passwordValue = PasswordBox.value;

  if (!emailValue) {
    emailErrorField.innerText = "Email cannot be empty";
    emailErrorField.style.display = "block";
  }

  if (!passwordValue) {
    passwordErrorField.innerText = "password cannot be empty";
    passwordErrorField.style.display = "block";
  }

  if (passwordValue && passwordValue.length <= 6) {
    passwordErrorField.innerText = "password length must be greater than 6";
    passwordErrorField.style.display = "block";
  }
});
