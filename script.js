var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here


var characters = "!@#$%^&*()".split("");

var numbers = "1234567890".split("");
var passkey= ""
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var masterArray = []

function generatePassword() {

  var enter = parseInt(
    prompt("How many characters would you like in your password?Choose between 8 and 128")
  );

  if (!enter) {
    alert("this needs a value");
    return null;
  } else if (enter < 8 || enter > 128) {
    alert("password between 8 and 128 please");
    return null;
  }

  var confirmCharacter = confirm("Will this contain special characters?");
  var confirmNumber = confirm("Will this contain numbers?");
  var confirmUppercase = confirm("Will this contain Uppercase letters?");
  var confirmLowercase = confirm("Will this contain Lowercase letters?");

  if (confirmCharacter) {
    masterArray = masterArray.concat(characters)
  }

  if (confirmNumber) {
    masterArray = masterArray.concat(numbers)
  }

  if (confirmUppercase) {
    masterArray = masterArray.concat(uppercase)
  }

  if (confirmLowercase) {
    masterArray = masterArray.concat(lowercase)
  }

  console.log(masterArray)

  function generateRandom(array) {
    var randomMasterindex = Math.floor(Math.random() * array.length)
    var returnmastervalue = array[randomMasterindex]
    return returnmastervalue;
  }

  for (var i = 0; i < enter; i++) {
    passkey = passkey + generateRandom(masterArray)
  }
  


  console.log(passkey)

  //randomize pool set in to pasword with the same length

  return passkey;
}

