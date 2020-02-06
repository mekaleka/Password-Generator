
//code snippit for reference not for copy
// var specialCharacters = ["!", "?", "$", "#", "@", "&"]
// var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
// var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// var lowercaseArray = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var finalPassword = [];

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

//add params to this section
function writePassword() {
var length = prompt("How long is the password");
var lowerCase = confirm("Do you want lowercase charicters?");
var upperCase = confirm("Do you want uppercase charicters?");
var numericChars = confirm("Do you want numeric characters?");
var specialChars = confirm("Do you want special characters?");
console.log(lowercase)
console.log(uppercase)
console.log(numericChars)
console.log (specialChar)
console.log(length)



while (
  params.length < 8 ||
  params.length > 128 ||
  params.length === undefined
){
options.length = prompt("How long would you like your password to be? Greater then 8 or less then 128.");



for (i = 0; i < length; i++) {

  // if they selected lowercase then pull from lowercase array and add to new array which is the password
  if(lowerCase === true) {
    // pull from lowercase array randomly and add an element to a new array
    finalPassword.push(lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)])
    console.log(finalPassword)
  }
  if(upperCase === true) {
    finalPassword.push(upperCaseArray[Math.floor(math.random() * upperCaseArray.length)])
    
  }
  if(numericChars === true) {
    finalPassword.push(numericCharsArray[math.floor(math.random() * numericCharsArray.length)])
  }
  if(specialChars === true) {
    finalPassword.push(specialCharacters[math.floor(math.random() * specialCharsactersArrays.length)])
    console.log(finalPassword)
  //if they selected lowercase, uppercase, numeric, and or special charicters, then pull from uppercase array and add to new array which is the password
  }

  return pasword.slice(0, options.length)
}
  
function getRandomValue(str) {
  return str[Math.floor(Math.random() * str.length)];
}
// function generatePassword(options){
// var password = "";

// for (let i = 0; i < options.length; i++) {

// }




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

