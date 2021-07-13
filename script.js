// variables defined
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = " ~`! @#$%^&*()_-+={[}]|<,>.?/";
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
// Generating password
var passwordcreated = [];
var generatingpassword = "";

if (lowercaseletters) generatingpassword = generatingpassword.concat(lowercaseletters);
if (uppercaseletters) generatingpassword = generatingpassword.concat(uppercaseletters);
if (numbers) generatingpassword = generatingpassword.concat(numbers);
if (symbols) generatingpassword = generatingpassword.concat(symbols);

while (passwordcreated.length = passwordlength){
  var completepassword = generatingpassword [Math.random * generatingpassword.length]
  passwordcreated.push(completepassword);
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
