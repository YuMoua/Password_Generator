// Assignment code here
// Variables needed to create a password with needed numbers, letters, and symbols

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

  function generatePassword(upperLength, lowerLength, numLength, symLength) {
    let randomPass = "";
    let preMixedPass = "";
    // code needed to randomly select from
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    const numbers = "0123456789".split('');
    const symbols = "!@#$%^&*()_+-=".split('');
    // code needed to turn the strings into integers for the for loops below
    let upperAlphabetLength = parseInt(upperLength, 10);
    let lowerAlphabetLength = parseInt(lowerLength, 10);
    let numbersLength = parseInt(numLength, 10);
    let symbolsLength = parseInt(symLength, 10);

    // The for loops to randomly select a letter, symbol, or number
    for (let i = 0; i < upperAlphabetLength; i++) {
      preMixedPass += upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)];
    }
    for (let i = 0; i < lowerAlphabetLength; i++) {
      preMixedPass += lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)];
    }
    for (let i = 0; i < numbersLength; i++) {
      preMixedPass += numbers[Math.floor(Math.random() * numbers.length)];
    }
    for (let i = 0; i < symbolsLength; i++) {
      preMixedPass += symbols[Math.floor(Math.random() * symbols.length)];
    }

    // Code allows password segments to be randomized
    function randomizePassword(){
      return 0.5-Math.random()
    }
    randomPass = preMixedPass.split('').sort(randomizePassword).join('');
    // Passed mixed password back into the variable in the textbox
    return randomPass;
  }

  let upperLength = window.prompt("Number of upper case letters for password: ");
  let lowerLength = window.prompt("Amount of lower case letters for password: ");
  let numLength = window.prompt("Amount of Numbers for password: ");
  let symLength = window.prompt("Amount of sumbols for password: ")

  var password = generatePassword(upperLength, lowerLength, numLength, symLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







