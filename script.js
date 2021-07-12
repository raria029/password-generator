// Number & Range Selector/ Syncing the two
const numberselector = document.getElementById ('numberselector')
const rangeselector = document.getElementById ('rangeselector')
numberselector.addEventListener('input', syncselector)
rangeselector.addEventListener('input', syncselector)
function syncselector(e) {
  const value = e.target.value
  numberselector.value = value
  rangeselector.value = value
}
//Lowercase, Uppercase, Numbers, Special Characters
const lowercaseletters = document.getElementById('lowercaseletters')
const uppercaseletters = document.getElementById('uppercaseletters')
const numbers = document.getElementById('numbers')
const specialcharacters = document.getElementById('specialcharacters')
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Arrays to generate
const lowercase_char_code = arrayfromlowtohigh(97,122)
const uppercase_char_code = arrayfromlowtohigh(65,90)
const numbers_char_code = arrayfromlowtohigh(48,57)
const specialcharacters_char_code = arrayfromlowtohigh(33,47).concat(
  arrayfromlowtohigh(58,64)
).concat(
  arrayfromlowtohigh(91,96)
).concat(
  arrayfromlowtohigh(123,126)
)
// values registered when checked off
const rangeamount = numberselector.value
const lowercaseletters = lowercaseletters.checked
const uppercaseletters = uppercaseletters.checked
const numbers = numbers.checked
const specialcharacters = specialcharacters.checked
// Write password to the #password input
function writePassword(rangeamount, lowercaseletters, uppercaseletters, specialcharacters, numbers) { 
  console.log(lowercase_char_code)
  String.fromCharCode(65)
}
function arrayfromlowtohigh(low, high){
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 


// Add event listener to generate button
var button = document.getElementById("generate");

document.getElementById("generate").addEventListener("click", function() {
  if (document.querySelector(".criteria").style.display == ""){
      document.querySelector(".criteria").style.display = 'flex';
  } else {
    console.log("write password")
  }
});
button.addEventListener("click", writePassword);
