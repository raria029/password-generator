// Char codes as variables
String.arrayfromlowtohigh(65)
var lowercaseletter = arrayfromlowtohigh(97,122)
var uppercaseletters = arrayfromlowtohigh(65,90)
var numbers = arrayfromlowtohigh(48,57)
var symbols = arrayfromlowtohigh(33,47).concat(
  arrayfromlowtohigh(58,64)
).concat(
  arrayfromlowtohigh(91,96)
).concat(
  arrayfromlowtohigh(123,126)
)

// Password Criteria for User to choose
function generatePassword(){
  // conditions for the code to loop
  while (!lowercaseletters && !uppercaseletters && !numbers && !symbols) {
    window.alert("Choose from the following prompts what your password should include:");
  // Password Length
  var passwordlength = prompt("Enter between 8 - 128 characters for the Password Length:");
  passwordlength();
  while (passwordlength <= 128 || passwordlength >=8)
//Options for Criteria
  var lowercaseletters = window.confirm("I would like to include Lowercase Letters in my password.");
  var uppercaseletters = window.confirm("I would like to include Uppercase Letters in my password.");
  var numbers = window.confirm("I would like to include Numbers in my password.");
  var symbols = window.confirm("I would like to include Symbols in my password.");
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
​}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
