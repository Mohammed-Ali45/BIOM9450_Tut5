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
      "Password must be at least 8 characters"
    );
  } else if (passwordInput.value.search(/[a-z]/) < 0) {
    throwError(
      passwordInput,
      passwordError,
      "There must be at least one lower case character"
    );
  } else if (passwordInput.value.search(/[A-Z]/) < 0) {
    throwError(
      passwordInput,
      passwordError,
      "There must be at least one upper case character"
    );
  } else if (passwordInput.value.search(/[0-9]/) < 0) {
    throwError(
      passwordInput,
      passwordError,
      "There must be at least one numerical character"
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
function fnameCheck() {
  //Retrieves user input and <span> element for displaying errors for first name input field
  let firstNameInput = document.getElementById("fname");
  let firstNameError = document.getElementById("firstname-error");

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
}

function lnameCheck() {
  let lastNameInput = document.getElementById("lname");
  let lastNameError = document.getElementById("lastname-error");

  const nameRegex = new RegExp(/^[a-zA-Z-']+( [a-zA-Z]+)*$/);

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

/* All 3 DOB fields are checked in this function and output errors
 under it */
function dobCheck() {
  //retrieving user inputted date of birth
  let dayInput = document.getElementById("DOBday");
  let monthInput = document.getElementById("DOBmonth");
  let yearInput = document.getElementById("DOByear");

  //turning string inputs into numbers for interpretation for each input
  let day = parseInt(dayInput.value);
  let month = parseInt(monthInput.value);
  let year = parseInt(yearInput.value);

  //retrieving <span> tag for printing errors under intput field
  let dobError = document.getElementById("DOB-error");

  /*flags that designate whether any given field has passed all checks.
  Errors and error associated styling are cleared from respective input fields if all associated flags are boolean true.
  Any errors thrown by below code blocks are retained if at least one of the associated flags are boolean false */
  let isDayHappy;
  let isMonthRangeHappy;
  let isMonthLengthHappy;
  let isYearHappy;

  /*Year validity check.
  Error is displayed if a year too far into the past or any year in the future is inputted. */
  if (isNaN(year) || year < 1900 || year > 2023) {
    throwError(yearInput, dobError, "Please enter a valid year");
    isYearHappy = false;
    /*The below else if is a motif throughout this function.
    It is only reached when the inputted year is valid.
    It will clear the error message and reset border styling if the inputted year is valid.
    This prevents it from clearing an error message from a different block,
    or resetting border styling when an error should still be active */
  } else if (dobError.textContent === "Please enter a valid year") {
    resetBorderStyle(yearInput, dobError);
    /*The below else statement is also a motif in this function.
    It will set the flag for year to true only if the year is valid
    */
  } else {
    isYearHappy = true;
  }

  //checking if month is valid
  if (isNaN(month) || month > 12 || month < 1) {
    throwError(monthInput, dobError, "Please enter a valid month");
    isMonthRangeHappy = false;
  } else if (dobError.textContent === "Please enter a valid month") {
    resetBorderStyle(monthInput, dobError);
  } else {
    isMonthRangeHappy = true;
  }

  if (monthInput.value.length !== 2) {
    throwError(monthInput, dobError, "Please enter month as mm");
    isMonthLengthHappy = false;
  } else if (dobError.textContent === "Please enter month as mm") {
    resetBorderStyle(monthInput, dobError);
  } else {
    isMonthLengthHappy = true;
  }

  //checking if day is valid
  if (month === 2 && day > 28) {
    throwError(dayInput, dobError, "Please enter a calendar day that exists");
    isDayHappy = false;
  } else if (
    (month === 4 || month === 6 || month === 9 || month === 11) &&
    day > 30
  ) {
    throwError(dayInput, dobError, "Please enter a calendar day that exists");
  } else if (
    dobError.textContent === "Please enter a calendar day that exists"
  ) {
    resetBorderStyle(dayInput, dobError);
  } else if (isNaN(day) || day > 31 || day < 1) {
    throwError(dayInput, dobError, "Please enter a valid day");
    isDayHappy = false;
  } else if (dobError.textContent === "Please enter a valid day") {
    resetBorderStyle(dayInput, dobError);
  } else {
    isDayHappy = true;
  }

  // the final else is not necessary in this block because no errors can take precedence over this one
  if (dayInput.value.length !== 2) {
    throwError(dayInput, dobError, "Please enter day as dd");
    isDayHappy = false;
  } else if (dobError.textContent === "Please enter day as dd") {
    resetBorderStyle(dayInput, dobError);
  }

  // Rudimentary method to prevent future dates inside 2023 from being submitted
  if (year === 2023 && month > 11) {
    throwError(monthInput, dobError, "Please enter a valid month");
    isMonthRangeHappy = false;
  } else if (year === 2023 && day > 3) {
    throwError(dayInput, dobError, "Please enter a valid day");
    isDayHappy = false;
  }

  //checks if any of the fields are empty and gives an error if so
  if (dayInput.value === "") {
    emptyFieldError(dayInput, dobError);
  }

  if (monthInput.value === "") {
    emptyFieldError(monthInput, dobError);
  }

  if (yearInput.value === "") {
    emptyFieldError(yearInput, dobError);
  }

  // Will reset border style if variable checks are happy
  if (isYearHappy === true) {
    yearInput.style.borderColor = "";
  }

  if (isMonthRangeHappy === true && isMonthLengthHappy === true) {
    monthInput.style.borderColor = "";
  }

  if (isDayHappy === true) {
    dayInput.style.borderColor = "";
  }
}
