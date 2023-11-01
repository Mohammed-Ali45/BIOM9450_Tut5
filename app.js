// JavaScript for form validation

// Functions used universally
// Error thrown for empty field into <span> tag under respective input field
function emptyFieldError(inputField, errorTextElement) {
  errorTextElement.innerHTML = "This field is required";
  inputField.style.borderColor = "red";
}

// Clears error and resets border color
function resetBorderStyle(inputField, errorTextElement) {
  errorTextElement.innerHTML = "";
  inputField.style.borderColor = "";
}

// Generic error generator, displays errorText parameter as the error text, makes border red too
function throwError(inputField, errorTextElement, errorText) {
  errorTextElement.innerHTML = errorText;
  inputField.style.borderColor = "red";
}

//Form validation starts here

//Email input validation
function emailCheck() {
  /* Retrieves user input and <span> element to display errors
  Defines regular expression used to check if input represents valid email */
  let emailInput = document.getElementById("email");
  let emailError = document.getElementById("email-error");
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  );

  // Throws error in <span> tag under input element if user input does not match regular expression
  if (emailInput.value.length === 0) {
    emptyFieldError(emailInput, emailError);
  } else if (emailInput.value.match(emailRegex) === null) {
    throwError(emailInput, emailError, "Please enter a valid email address");
  } else {
    resetBorderStyle(emailInput, emailError);
  }
}

//Password validation
function passwordCheck() {
  /* Retrieving user input and <span> element to display errors
  Defines regular expression used to check if password conforms to constraints */
  let passwordInput = document.getElementById("pword");
  let passwordError = document.getElementById("password-error");
  const passwordRegex = new RegExp(/^[a-zA-Z0-9]{8,}$/);

  // Throws error in <span> tag under input element if user input does not match regular expression
  if (passwordInput.value.length === 0) {
    emptyFieldError(passwordInput, passwordError);
  } else if (passwordInput.value.length < 8) {
    throwError(
      passwordInput,
      passwordError,
      "Password must be at least 8 characters long"
    );
  } else if (passwordInput.value.match(passwordRegex) === null) {
    throwError(passwordInput, passwordError, "No Special characters allowed");
  } else {
    resetBorderStyle(passwordInput, passwordError);
  }
}

//Password re-entry validation
function ReenterPasswordCheck() {
  // Retrieves initially inputted password
  let password = document.getElementById("pword");
  // Retrieving user input and <span> element to display errors
  let rePasswordInput = document.getElementById("repword");
  let rePasswordError = document.getElementById("repassword-error");

  // Displays error if passwords do not match
  if (rePasswordInput.value.length === 0) {
    emptyFieldError(rePasswordInput, rePasswordError);
  } else if (rePasswordInput.value === password.value) {
    resetBorderStyle(rePasswordInput, rePasswordError);
  } else {
    throwError(rePasswordInput, rePasswordError, "Passwords must match");
  }
}

// First and last name validation
function nameCheck() {
  //Retrieves user input and <span> element for displaying errors for first and last name input fields
  let firstNameInput = document.getElementById("fname");
  let firstNameError = document.getElementById("firstname-error");
  let lastNameInput = document.getElementById("lname");
  let lastNameError = document.getElementById("lastname-error");
  // Defines a regular expression to check if name falls within constraints
  const nameRegex = new RegExp(/^[a-zA-Z-']+( [a-zA-Z]+)*$/);

  if (firstNameInput.value.length === 0) {
    emptyFieldError(firstNameInput, firstNameError);
  } else if (firstNameInput.value.match(nameRegex) === null) {
    throwError(
      firstNameInput,
      firstNameError,
      "No special characters except intermediate spaces and ' -"
    );
  } else {
    resetBorderStyle(firstNameInput, firstNameError);
  }

  if (lastNameInput.value.length === 0) {
    emptyFieldError(lastNameInput, lastNameError);
  } else if (lastNameInput.value.match(nameRegex) === null) {
    throwError(
      lastNameInput,
      lastNameError,
      "No special characters except intermediate spaces and ' -"
    );
  } else {
    resetBorderStyle(lastNameInput, lastNameError);
  }
}
