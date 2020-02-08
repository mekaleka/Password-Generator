// query seletor targets element with id of generate sets equal to variable
var generateBtn = document.querySelector('#generate');

//variables to store choices based off of type
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = lowercase.toUpperCase();
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = '0123456789';


// Write password to the #password input
function writePassword() {
  
	//Object that contains values for user selections (parameters)
	var params = {
		lowercase: confirm('Would you like to use lowercase characters?'),
		uppercase: confirm('Would you like to use uppercase characters?'),
		specialChars: confirm('Would you like to use special characters?'),
		numericChars: confirm('Would you like to use numeric characters?'),
	};
	while (params.length < 8 || params.length > 128 || params.length === undefined) {
		params.length = parseInt(prompt('How long would you like your password to be? Greater than 8 Less than 128'));
	}

	//variable to store the generated password; it is equal to what is returned from the generate passwor function
	var password = generatePassword(params);

	//query selector to target the text area with the id of password set equal to variable
	var passwordText = document.querySelector('#password');

	//grabbing the variable on line 29 (query selector) and changing the text value of that element.  we are setting the value equal to the password variable.  
	passwordText.value = password;
}




//function to generate password and it takes in options.  
function generatePassword(params) {
	var password = '';
 
	for (let i = 0; i < params.length; i++) {
		if (params.uppercase) {
			password += getRandomValue(uppercase);
		}
		if (params.lowercase) {
			password += getRandomValue(lowercase);
		}
		if (params.specialChars) {
			password += getRandomValue(special);
		}
		if (params.numericChars) {
			password += getRandomValue(numbers);
		}
	}
	// it gives password numbers user specified.
	return password.slice(0, params.length);
}
 //function that gets generates a random index from the str lenght and returns the characther of that string.  
function getRandomValue(str) {
	return str[Math.floor(Math.random() * str.length)];
}
// This is the line of code that starts it all.  Event listener that listens for the mouse click and once the cilck happens it calls the writePassword function. 
generateBtn.addEventListener('click', writePassword);

