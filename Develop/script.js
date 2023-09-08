// Assignment code below
var button = document.querySelector("btn");
document.addEventListener("click", passCriteria() );

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
// var symbol = " !@#$%^&*()"'*+,-./;:<=>?{}[]_`~ ";
var allChar = upperCase + lowerCase + num + symbol;

function passCriteria(){
  //uppercase criteria prompt
  var userUpperInput = window.prompt("Do you want to include upper case letters? Y or N?")
  // if user inputs a lowercase character, change to uppercase
  if (userUpperInput.toUpperCase() === "Y") {
   //***confirm yes and "track" user response***
   window.alert("👍")
  }
  else {
    window.alert("Password MUST contain atleast 1 uppercase letter");
  }

//lowercase criteria prompt
  var userLowerInput = window.prompt("Do you want to include lowercase letters? Y or N?")
  // if user inputs a lowercase character, change to uppercase
  if (userLowerInput.toUpperCase() === "Y") {
    window.alert("👍")
   //***confirm yes and "track" user response***
  }
  else {
    window.alert("Password MUST contain atleast 1 lowercase letter");
  }

//numerical criteria prompt
  var userNumInput = window.prompt("Do you want to include numbers? Y or N?")
  // if user inputs a lowercase character, change to uppercase
  if (userNumInput.toUpperCase() === "Y") {
    window.alert("👍")
   //***confirm yes and "track" user response***
  }
  else {
    window.alert("Password MUST contain atleast one number 0-9");
  }

//special characters criteria prompt
  var userSpecInput = window.prompt("Do you want to include special characters? Y or N?")
  // if user inputs a lowercase character, change to uppercase
  if (userSpecInput.toUpperCase() === "Y") {
    window.alert("👍")
   //***confirm yes and "track" user response***
  }
  else {
    window.alert("Password MUST contain atleast 1 special character");
  }
}


// create a function to generate random password using at least (1) uppercase (1) lowercase (1) number and (1) symbol
/* function generatePass() {
  password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += num[Math.floor(Math.random() * num.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  //because we want a password longer than (4) characters (((1) uppercase (1) lowercase (1) number and (1) symbol)) we need to add an if conditional statement to randomly select more characters
  // if the current length is less than the desired password.length
  if (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordBox.value = password;
} */

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
