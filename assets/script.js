// Assignment code below
//create variables
var passwordBox = document.getElementById("password");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var symbol = " !@#$%^&*()'*+,-./;:<=>?{}[]_`~ ";
var desLength = 0;

//variables dependent on user input
var allChar = upperCase + lowerCase + num + symbol;

// function to generate criteria prompts then execute password generation
function passCriteria() {
  //length prompt
  var userLengthInput = prompt(
    "How long do you want your password to be? (12-128)");
  if (userLengthInput < 12 || userLengthInput > 128) {
    alert("password must be between 12-128 characters!");
    return;
  }
  desLength = userLengthInput;


  //uppercase criteria prompt
  var userUpperInput = confirm("Include uppercase letters in your password?");
  if (userUpperInput === true) {
    allChar += upperCase;
  }

  //lowercase criteria prompt
  var userLowerInput = confirm("Include lowercase letters in your password?");
  if (userLowerInput === true) {
    allChar += lowerCase;
  }

  //numerical criteria prompt
  var userNumInput = confirm("Include numbers in your password?");
  if (userNumInput === true) {
    allChar += num;
  }

  //special characters criteria prompt
  var userSymbInput = confirm("Include special characters in your password?");
  if (userSymbInput === true) {
    allChar += symbol;
  }
}

// create a function to generate random password using user selected criteria
function generatePass() {
  password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += num[Math.floor(Math.random() * num.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  //use for loop to ensure password length meets user selected desLength
  for (let i = 0; i < desLength; i++) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  return password;
}

function generatePassword() {
  passCriteria();
  var resultPass = generatePass();
  return resultPass;
}

// Assignment code above





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to writePassword upon button click
generateBtn.addEventListener("click", writePassword);
