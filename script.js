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

  passwordText.value = password; 

}
// Add event listener to generate button
//document.getElementById("generate").onclick = function () {writePassword();
document.getElementById("generate").addEventListener("click", function() {
  if (document.querySelector(".criteria").style.display == ""){
      document.querySelector(".criteria").style.display = 'flex';
  } else {
    console.log("write password")
  }
});
//generateBtn.addEventListener("click", writePassword);
