// Assignment code below

// initialize global variables??

// create an array of possible user input characters
var charOptions = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]","^", "_", "`", "{", "|", "}", "~"];

// event on button element
const btn = document.querySelector("button");

// create a function for generation
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

// when button is clicked (event occured), randomly select password combo of ## character
function generatePass() {
  const newPass = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.getElementById("password") = newPass;
}

btn.addEventListener("click", generatePass);

// Assignment code above


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
