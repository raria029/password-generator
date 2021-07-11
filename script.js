// Assignment code here
const numberselector = document.getElementById ('numberselector')
const rangeselector = document.getElementById ('rangeselector')
numberselector.addEventListener('input', syncselector)
rangeselector.addEventListener('input', syncselector)
function syncselector(e) {
  const value = e.target.value
  numberselector.value = value
  rangeselector.value = value
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//document.getElementById("generate").onclick = function () {writePassword();
document.getElementById("criteria").addEventListener("click", function() {document.getElementById("criteria").style.visibility = 'flex'});
//generateBtn.addEventListener("click", writePassword);