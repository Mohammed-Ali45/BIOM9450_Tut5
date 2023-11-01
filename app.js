// JavaScript for form validation

//Email input validation

function emailCheck() {
  let emailInput = document.getElementById("email");
  const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/); 

  document.getElementById("email-error").innerHTML = emailInput.textContent;
  
  /*
  if (emailInput.match(emailRegex) === null) {
    document.getElementById("email-error").innerHTML = "That's not the string we want";
  } else {
    document.getElementById("email-error").innerHTML = "This is fine!";
  }
*/

}