// JavaScript for form validation

// Functions used universally
// Error thrown for empty field into <span> tag under respective input field
function emptyFieldError(inputField, errorTextElement) {
  errorTextElement.innerHTML = "This field is required";
  inputField.style.borderColor = "red";
}

// Clears error and resets border color
function resetErrorAndBorder(inputField, errorTextElement) {
  errorTextElement.innerHTML = "";
  inputField.style.borderColor = "";
}

/* Generic error generator, displays errorText parameter as the error text,
 makes border of respective input field red too */
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
  /* Allows lowercase, uppercase, numerical and select special characters
   before the @, any number of '.'s after the @, but only 2 to 4 characters
   after the last '.' */
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  );

  /* Throws error in <span> tag under input element if user input does not
   match regular expression.
   Resets the border style and clears error if input does match regular
   expression*/
  if (emailInput.value.length === 0) {
    emptyFieldError(emailInput, emailError);
  } else if (emailInput.value.match(emailRegex) === null) {
    throwError(emailInput, emailError, "Please enter a valid email address");
  } else {
    resetErrorAndBorder(emailInput, emailError);
  }
}

//Password validation
function passwordCheck() {
  /* Retrieving user input and <span> element to display errors
  Defines regular expression used to check if password conforms to
  constraints */
  let passwordInput = document.getElementById("pword");
  let passwordError = document.getElementById("password-error");
  const passwordRegex = new RegExp(/^[a-zA-Z0-9]{8,}$/);

  /* Throws error in <span> tag under input element if user input does not
   match regular expression or does not contain at least one lowercase,
   uppercase, and one numerical character */
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
    resetErrorAndBorder(passwordInput, passwordError);
  }
}

//Password re-entry validation
function ReenterPasswordCheck() {
  // Retrieves initially inputted password
  let password = document.getElementById("pword");
  // Retrieving user input and <span> element to display errors
  let rePasswordInput = document.getElementById("repword");
  let rePasswordError = document.getElementById("repassword-error");

  // Displays error if passwords do not match after checking if field is empty
  if (rePasswordInput.value.length === 0) {
    emptyFieldError(rePasswordInput, rePasswordError);
  } else if (rePasswordInput.value === password.value) {
    resetErrorAndBorder(rePasswordInput, rePasswordError);
  } else {
    throwError(rePasswordInput, rePasswordError, "Passwords must match");
  }
}

// First and last name validation
function fnameCheck() {
  /* Retrieves user input and <span> element for displaying errors for first
  name input field */
  let firstNameInput = document.getElementById("fname");
  let firstNameError = document.getElementById("firstname-error");

  // Defines a regular expression to check if name falls within constraints
  const nameRegex = new RegExp(/^[a-zA-Z-']+( [a-zA-Z]+)*$/);

  /* Throws error if field is empty, or if input does not match the defined
  regular expression.
  Clears error and resets border styling when input is valid */
  if (firstNameInput.value.length === 0) {
    emptyFieldError(firstNameInput, firstNameError);
  } else if (firstNameInput.value.match(nameRegex) === null) {
    throwError(
      firstNameInput,
      firstNameError,
      "No special characters except intermediate spaces and ' -"
    );
  } else {
    resetErrorAndBorder(firstNameInput, firstNameError);
  }
}

// Functions identically to first name input validation above
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
    resetErrorAndBorder(lastNameInput, lastNameError);
  }
}

/* All 3 DOB fields are checked in this function and output errors
 under it */
function dobCheck() {
  //retrieving user inputted date of birth
  let dayInput = document.getElementById("DOBday");
  let monthInput = document.getElementById("DOBmonth");
  let yearInput = document.getElementById("DOByear");

  //turning string inputs into numbers for interpretation
  let day = parseInt(dayInput.value);
  let month = parseInt(monthInput.value);
  let year = parseInt(yearInput.value);

  //retrieving <span> tag for printing errors under intput field
  let dobError = document.getElementById("DOB-error");

  /* Input flags that are true when given field passes all checks.
  Errors and associated styling are cleared from respective input fields if
  flags are true.
  Any errors thrown by below code blocks are retained if at least one flag is
  false for each input */
  let isDayHappy;
  let isMonthHappy;
  let isYearHappy;

  // Year checks
  /* Error is displayed if a year too far into the past or any year in the future
  is inputted. */
  if (isNaN(year) || year < 1900 || year > 2023) {
    throwError(yearInput, dobError, "Please enter a valid year");
    isYearHappy = false;
    /* This is only reached when the inputted year is valid.
    Clears error message and resets border styling if existing error also came
    from this block.
    Prevents clearing error message thrown by different block,
    or resetting border styling when an error should still be active */
  } else if (dobError.textContent === "Please enter a valid year") {
    resetErrorAndBorder(yearInput, dobError);
    //Sets year flag to true only if the year is valid
  } else {
    isYearHappy = true;
  }

  // Month checks
  /* checking if month is valid, goes through same check as year block.
  Two input flags included to prevent input length check potentially overriding
  false result from range check below */
  if (isNaN(month) || month > 12 || month < 1) {
    throwError(monthInput, dobError, "Please enter a valid month");
    isMonthHappy = false;
  } else if (dobError.textContent === "Please enter a valid month") {
    resetErrorAndBorder(monthInput, dobError);
  } else {
    isMonthHappy = true;
  }

  /*Checks month is written in mm format, throws error if not,
  then performs same check on existing error as year block above */
  if (monthInput.value.length !== 2) {
    throwError(monthInput, dobError, "Please enter month as mm");
    isMonthHappy = false;
  } else if (dobError.textContent === "Please enter month as mm") {
    resetErrorAndBorder(monthInput, dobError);
  }

  // Day checks
  /*Checks if inputted day exists within the inputted month, throws relevant
  error message if not.
  Checks Feb first, then all months with 30 days */
  if (month === 2 && day > 28) {
    throwError(dayInput, dobError, "Please enter a calendar day that exists");
    isDayHappy = false;
  } else if (
    (month === 4 || month === 6 || month === 9 || month === 11) &&
    day > 30
  ) {
    throwError(dayInput, dobError, "Please enter a calendar day that exists");
    isDayHappy = false;
  } else if (
    dobError.textContent === "Please enter a calendar day that exists"
  ) {
    resetErrorAndBorder(dayInput, dobError);
  } else if (isNaN(day) || day > 31 || day < 1) {
    //Checks if day can exist within any month, throws error if not
    throwError(dayInput, dobError, "Please enter a valid day");
    isDayHappy = false;
  } else if (dobError.textContent === "Please enter a valid day") {
    resetErrorAndBorder(dayInput, dobError);
  } else {
    isDayHappy = true;
  }

  /*Same format check as for mm above. Checks day is written in dd, throws
  error if not
  Final flag change is not necessary in this block because no errors can take
  precedence over this one */
  if (dayInput.value.length !== 2) {
    throwError(dayInput, dobError, "Please enter day as dd");
    isDayHappy = false;
  } else if (dobError.textContent === "Please enter day as dd") {
    resetErrorAndBorder(dayInput, dobError);
  }

  //end of day checks

  /* Rudimentary method to prevent future dates inside 2023 from being
  submitted */
  if (year === 2023 && month > 11) {
    throwError(monthInput, dobError, "Please enter a valid month");
    isMonthHappy = false;
  } else if (year === 2023 && month >= 11 && day > 3) {
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

  /* Will reset border style if all input flags for given field are true 
  clears red border from fields with no active errors */
  if (isYearHappy === true) {
    yearInput.style.borderColor = "";
  }

  if (isMonthHappy === true) {
    monthInput.style.borderColor = "";
  }

  if (isDayHappy === true) {
    dayInput.style.borderColor = "";
  }

  /* Removes residual error from empty field checks */
  if (isYearHappy === true && isMonthHappy === true && isDayHappy === true) {
    dobError.innerHTML = "";
  }
}

// Throws error if "Select" option from dropdown selected
function genderCheck() {
  let genderInput = document.getElementById("gender-dropdown");
  let genderError = document.getElementById("gender-error");

  if (genderInput.value === "Select") {
    throwError(
      genderInput,
      genderError,
      "Please select an option from the list"
    );
  } else {
    resetErrorAndBorder(genderInput, genderError);
  }
}

function finalCheck() {
  /* Validating all fields to check for errors 
  If this function returns false, the form is not submitted and error messages
  are displayed under submission button and input fields that failed their
  checks*/
  emailCheck();
  passwordCheck();
  ReenterPasswordCheck();
  fnameCheck();
  lnameCheck();
  dobCheck();
  genderCheck();

  let submitError = document.getElementById("submit-error");

  if (
    document.getElementById("email-error").textContent === "" &&
    document.getElementById("password-error").textContent === "" &&
    document.getElementById("repassword-error").textContent === "" &&
    document.getElementById("firstname-error").textContent === "" &&
    document.getElementById("lastname-error").textContent === "" &&
    document.getElementById("DOB-error").textContent === ""
  ) {
    return true;
  } else {
    submitError.innerHTML = "Please review form for incorrect inputs";
    return false;
  }
}
