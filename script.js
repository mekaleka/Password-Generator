
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numeric = "0123456789";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";

// Assignment Code
var generateBtn = document.querySelector("#generate");
//
// Write password to the #password input
function writePassword() {
  var length = parseInt(
    prompt(
      "How long would you like your password to be? Greater then 8 or less then 128."
    )
  );

  // function generatePassword(options) {
  //   var password = "";
  // }

  var lowerCase = confirm("Do you want lowercase charicters?");
  var upperCase = confirm("Do you want uppercase charicters?");
  var numericChars = confirm("Do you want numeric characters?");
  var specialChars = confirm("Do you want special characters?");
  var password = generatePassword({
    length: length,
    lowerCase: lowerCase,
    upperCase: upperCase,
    numericChars: numericChars,
    specialChars: specialChars
  });

  while (
    params.length < 8 ||
    params.length > 128
    params.length === undefined
    {
      params.length = perseInt(
          prompt(
            "How long would you like your password to be? Greater then 8 or less then 128."
          )
        );
          }

  var passwordText = document.querySelector("#password");
  //.querySelector is object and .document is the methode

  passwordText.value = password;
}

function generatePassword(options) {
  var password = "";
  
  // concat the characters to the password variable defined above
  // if they selected lowercase then pull from lowercase array and add to new array which is the password
  // pull from lowercase array randomly and add an element to a new array
  for (let i = 0; i < length; i++) {
    if (options.upperCase) {
      password += getRandomValue(uppercase);
    }
    if (options.lowerCase)
    password += getRandomValue(lowercase);
  }
    if (options.specialChars)
    password += getRandomValue(special)

    if (options.numericChars)
    password += getRandomValue(numeric)

      console.log(finalPassword);
    }
  
  //if they selected lowercase, uppercase, numeric, and or special charicters, then pull from uppercase array and add to new array which is the password
  
  return password.slice(0, params.length);{
}

function getRandomValue(str) {
  return str[Math.floor(Math.random() * str.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
