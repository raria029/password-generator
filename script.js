// Char codes as variables
var lowercaseletter = arrayfromlowtohigh(97,122)
var uppercaseletters = arrayfromlowtohigh(65,90)
var numbers = arrayfromlowtohigh(48,57)
var specialcharacters = arrayfromlowtohigh(33,47).concat(
  arrayfromlowtohigh(58,64)
).concat(
  arrayfromlowtohigh(91,96)
).concat(
  arrayfromlowtohigh(123,126)
)
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(rangeamount, lowercaseletters, uppercaseletters, specialcharacters, numbers) {
  const rangeamount = numberselector.value
  const lowercaseletters = lowercaseletters.checked
  const uppercaseletters = uppercaseletters.checked
  const numbers = numbers.checked
  const specialcharacters = specialcharacters.checked
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
​
  passwordText.value = password; 
​}

// Add event listener to generate button
var button = document.getElementById("generate");

document.getElementById("generate").addEventListener("click", function() {
  if (document.querySelector(".criteria").style.display == ""){
      document.querySelector(".criteria").style.display = 'flex';
  } else {
    console.log("write password")
  }
});
