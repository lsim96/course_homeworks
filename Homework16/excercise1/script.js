function formContainer(formType) {
  if (formType === "register") {
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("logInForm").style.display = "none";
  } else {
    document.getElementById("logInForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
  }
}

let addButton = document.getElementById("addBtn");
let logInBtn = document.getElementById("logInBtn");

let testObject = [];

addButton.addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  const age = document.getElementById("age1").value;

  let isValid = true;

  //username validation

  if (username.length > 25) {
    document.getElementById("usernameMessage").textContent =
      "Username shouldn't be longer than 25 characters";
    document.getElementById("usernameMessage").removeAttribute("hidden");

    isValid = false;
  }

  //email validation

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailMessage").textContent =
      "Please enter a valid email";
    document.getElementById("emailMessage").removeAttribute("hidden");

    isValid = false;
  }

  //password validation

  if (password.length < 8) {
    document.getElementById("passwordMessage").textContent =
      "Password should be at least 8 characters long";
    document.getElementById("passwordMessage").removeAttribute("hidden");

    isValid = false;
  }

  //age validation

  if (age < 18) {
    document.getElementById("ageMessage").textContent =
      "User should be older than 18";
    document.getElementById("ageMessage").removeAttribute("hidden");

    isValid = false;
  }

  if (isValid) {
    testObject.push({ username, email, password, age });
    alert("Registration successful!");
    formContainer("login");
  }
});

logInBtn.addEventListener("click", function () {
  const logInUsername = document.getElementById("username1").value;
  const logInPassword = document.getElementById("pass1").value;
  const user = testObject.find(function (user) {
    return user.username === logInUsername && user.password === logInPassword;
  });
  if (user) {
    alert("Login succeed");
  } else {
    alert("Login failed");
  }
});
