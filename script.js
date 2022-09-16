// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerAlph = ['a','b','c','d','e','f','d','e','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperAlph = ['A','B','C','D','E','F','D','E','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const special = ['!','@','#','$','%','^','&','*'];
const criteria = [lowerAlph, upperAlph, num, special];


function generatePassword() {
  length = prompt('What should the length of the password be: ');
  if (length<8 || length>128) {
    alert("Please enter a length between 8 and 128 characters.");
    generatePassword();
  } else {
    lowercase = confirm('Should it include lower-case characters?');
    uppercase = confirm('Should it include upper-case characters?');
    numeric = confirm('Should it include numeric values?');
    specialChar = confirm('Should it include special symbols');
  }

  let criteriaSelect = [lowercase, uppercase, numeric, specialChar];
  let newCriteria = [];

  for (i=0; i<criteriaSelect.length; i++){
    if (criteriaSelect[i]) {
    newCriteria = newCriteria.concat(criteria[i]);}
  }

  console.log(newCriteria);

  passw = ""
  for (i=0; i < length; i++){
    newChar = newCriteria[Math.floor(Math.random()*newCriteria.length)];
    passw = passw.concat(newChar);
  }
  return passw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
