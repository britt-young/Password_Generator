// Assignment code below
/* var button = document.querySelector("button");
document.addEventListener("click", passCriteria() ); */

var passwordBox = document.getElementById("password");
var length = 12;
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var symbol = " !@#$%^&*()'*+,-./;:<=>?{}[]_`~ ";
var allChar = upperCase + lowerCase + num + symbol;

// create a function to generate random password using at least (1) uppercase (1) lowercase (1) number and (1) symbol
function generatePass() {
  password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += num[Math.floor(Math.random() * num.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  //because we want a password longer than (4) characters (((1) uppercase (1) lowercase (1) number and (1) symbol)) we need to add an if conditional statement to randomly select more characters
  // if the current length is less than the desired password.length
  for(let i = 0; i < length; i++){
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
 return password;
} 

// function to generate criteria prompts then execute password generation
function passCriteria(){
  //uppercase criteria prompt
  var userUpperInput = prompt("Do you want to include uppercase letters? Y or N?")
  // if user inputs a lowercase character, change to uppercase
  if (userUpperInput === "Y") {
   //***confirm yes and "track" user response***
   window.alert("👍")
  }
  else {
    window.alert("Password MUST contain atleast 1 uppercase letter");
    break;
  }


//lowercase criteria prompt
  var userLowerInput = prompt("Do you want to include lowercase letters? Y or N?")
  // if user inputs a lowercase character, change to uppercase
  if (userLowerInput === "Y") {
    window.alert("👍")
   //***confirm yes and "track" user response***
  }
  else {
    window.alert("Password MUST contain atleast 1 lowercase letter");
    break;
  }


//numerical criteria prompt
  var userNumInput = prompt("Do you want to include numbers? Y or N?")
  // if user inputs a lowercase character, change to uppercase
  if (userNumInput === "Y") {
    window.alert("👍")
   //***confirm yes and "track" user response***
  }
  else {
    window.alert("Password MUST contain atleast one number 0-9");
    break;
  }


//special characters criteria prompt
  var userSymbInput = prompt("Do you want to include special characters? Y or N?")
  // if user inputs a lowercase character, change to uppercase
  if (userSymbInput === "Y") {
    window.alert("👍")
      //***confirm yes and "track" user response***
  }
  else {
    window.alert("Password MUST contain atleast 1 special character");
    break;
  }

  // if no select, then alert
  // if userNumbInput true, addd numb into allChar.
  // 
  //
  // 
  
}

function generatePassword(){
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
