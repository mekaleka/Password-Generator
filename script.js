//code snippit for reference not for copy
var specialCharacters = ["!", "?", "$", "#", "@", "&"]
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseArray = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

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
  var passwordText = document.querySelector("#password");
  //.querySelector is object and .document is the methode

  passwordText.value = password;
}

function generatePassword(params) {
  var password = "";

  // concat the characters to the password variable defined above
  for (i = 0; i < length; i++) {
    // if they selected lowercase then pull from lowercase array and add to new array which is the password
    if (params.lowerCase) {
      // pull from lowercase array randomly and add an element to a new array
      
        password += lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)]
      
      console.log(finalPassword);
    }
    if (upperCase === true) {
      finalPassword.push(
        upperCaseArray[Math.floor(math.random() * upperCaseArray.length)]
      );
    }
    if (numericChars === true) {
      finalPassword.push(
        numericCharsArray[math.floor(math.random() * numericCharsArray.length)]
      );
    }
    if (specialChars === true) {
      finalPassword.push(
        specialCharacters[
          math.floor(math.random() * specialCharsactersArrays.length)
        ]
      );
      console.log(finalPassword);
      //if they selected lowercase, uppercase, numeric, and or special charicters, then pull from uppercase array and add to new array which is the password
    }
  }

  return password.slice(0, params.length);
}

function getRandomValue(str) {
  return str[Math.floor(Math.random() * str.length)];
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
