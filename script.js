// Assignment Code
var generateBtn = document.querySelector("#generate");
//
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //.querySelector is object and .document is the methode
  
  passwordText.value = password;

}

function generatePassword(){
  return "SuperSecretPassword1098";
}
function writePassword() {
var length = prompt("How long is the password");
var lowercase = confirm("Do you want lowercase charicters?");
var uppercase = confirm("Do you want uppercase charicters?");
var numericChars = confirm("Do you want numeric characters?");
var specialChar = confirm("Do you want special characters?");


// Creates a confirm box which takes in true or false.

// Creates a prompt box which takes in text input.

// Alerts the output from our confirm box.

// Alerts the output from our prompt box.



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
