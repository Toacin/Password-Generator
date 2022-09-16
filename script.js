// Assignment Code
var generateBtn = document.querySelector("#generate");

// library of characters created here to support password generator
const lowerAlph = ['a','b','c','d','e','f','d','e','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperAlph = ['A','B','C','D','E','F','D','E','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const special = ['!','@','#','$','%','^','&','*', ')', '(', '_', '+', '-', '<', '>'];
// initialized an array that holds all the arrays
const criteria = [lowerAlph, upperAlph, num, special];

// function code below
function generatePassword() {
  // this prompts the user to choose a length and stores it in a length variable
  let length = prompt('What should the length of the password be: ');

  // this checks in user inputted length is valid. If so, it will asks a series of confirms on whether or not they want certain criteria met, stored in new variables.
  if (length<8 || length>128) {
    alert("Please enter a length between 8 and 128 characters.");
    generatePassword();
  } else {
    lowercase = confirm('Should it include lower-case characters?');
    uppercase = confirm('Should it include upper-case characters?');
    numeric = confirm('Should it include numeric values?');
    specialChar = confirm('Should it include special symbols');
  }
  
  // this initializes an array of all potential user choices
  const criteriaSelect = [lowercase, uppercase, numeric, specialChar];
  // this initializes an empty array which will eventually be reassigned with concacted arrays that hold characters based on user choice
  let newCriteria = [];

  // this for loops checks boolean values for each criteriaSelect element, and concatenates corresponding criteria arrays to newCriteria array
  for (i=0; i<criteriaSelect.length; i++){
    if (criteriaSelect[i]) {
      newCriteria = newCriteria.concat(criteria[i]);
    }
  }
  
  //this is just to check if newCriteria properly holds only characters based on character selection
  console.log(newCriteria);

  //initialize passw to hold a generated password only using characters from newCriteria Array
  let passw = ""

  //this for loop will create a choose a new character from newCriteria array and string concat. to passw variable. It will run as many times as the user inputted length.
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
