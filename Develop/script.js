// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Make four buckets for different password characters: special characters, numbers, lowercase, uppercase
var specialCharacters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", "`"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = uppercaseLetters.map(uppercaseLetters => {
  return uppercaseLetters.toLowerCase();
});
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


function generatePassword() {

  //Generate variables that are automatically false unless the user confirms true that they would like one of those characters
  var upperPresence = false;
  var lowerPresence = false;
  var specialPresence = false;
  var numbersPresence = false;

  let userPassLength = prompt("How long is your desired password? (8-128 characters)", "10");
  //store the password length as a variable
  var passwordLength = userPassLength;

  //validation for passwordLength to ensure the entered value is an integer between 8 and 128

  //Issue - when I answer a letter, number less than 8, or number greater than 128 twice in a row it continues on with the rest of the prompts instead of getting mad again...
  function passwordValidation() {
    if(passwordLength < 8){
      alert("You and I both know that number is less than 8...please try again");
      //recursive function to force them to start over
      generatePassword();
    } else if(passwordLength > 128) {
      alert("You and I both know that number is more than 128...please try again");
      //recursive function
      generatePassword();
    } else if(isNaN(passwordLength)) {
      alert("That's not a number...please try again");
      //recursive function
      generatePassword();
    }
  };

  passwordValidation();

  //Ask if the user would like special characters
  let userSpecial = confirm("Would you like special characters?");
  //If the user wants special characters then generate a true boolean value, otherwise generate a false
  if(userSpecial) {
    specialPresence = true;
  };

  //Ask if the user would like uppercase letters
  let userUpper = confirm("Would you like uppercase letters?");
  //If the user wants uppercase letters then generate a true boolean value, otherwise generate a false
  if(userUpper) {
    upperPresence = true;
  };

  //Ask if the user would like lowercase letters
  let userLower = confirm("Would you like lowercase letters?");
  //If the user wants lowercase letters then generate a true boolean value, otherwise generate a false
  if(userLower) {
    lowerPresence = true;
  };

  //Ask if the user would like numbers
  let userNumber = confirm("Would you like numbers?");
  //If the user wants numbers then generate a true boolean value, otherwise generate a false
  if(userNumber) {
    numbersPresence = true;
  };

  //if they don't select anything alert them to start over
  if(!specialPresence && !numbersPresence && !lowerPresence && !upperPresence){
    alert("Excuse me...you have to pick at least one type of character or this ain't gonna work");

    let userSpecial = confirm("Would you like special characters?");
    if(userSpecial) {
      specialPresence = true;
    };
  
    let userUpper = confirm("Would you like uppercase letters?");
    if(userUpper) {
      upperPresence = true;
    };

    let userLower = confirm("Would you like lowercase letters?");
    if(userLower) {
      lowerPresence = true;
    };

    let userNumber = confirm("Would you like numbers?");
    if(userNumber) {
      numbersPresence = true;
    };
  };

  //Generate variable options (buckets) for the possible array combinations
  var everyOption = [];
  var allButSpecial = [];
  var allButNumbers = [];
  var allButLower = [];
  var allButUpper = [];
  var numbersSpecial = [];
  var lowerSpecial = [];
  var numbersLower = [];
  var upperSpecial = [];
  var numbersUpper = [];
  var upperLower = [];
  var justSpecial = [];
  var justLower = [];
  var justUpper = [];
  var justNumbers = [];

  //Add buckets together depending on the characters the user chose to fill in the correct pre-created bucket
  if(numbersPresence && upperPresence && lowerPresence && specialPresence) {
    everyOption = specialCharacters.concat(uppercaseLetters, lowercaseLetters, numbers);
  } else if(numbersPresence && upperPresence && lowerPresence && !specialPresence){
    allButSpecial = numbers.concat(uppercaseLetters, lowercaseLetters);
  } else if(!numbersPresence && upperPresence && lowerPresence && specialPresence){
    allButNumbers = specialCharacters.concat(uppercaseLetters, lowercaseLetters);
  } else if(numbersPresence && upperPresence && !lowerPresence && specialPresence){
    allButLower = numbers.concat(uppercaseLetters, specialCharacters);
  } else if(numbersPresence && !upperPresence && lowerPresence && specialPresence){
    allButUpper = numbers.concat(specialCharacters, lowercaseLetters);
  } else if(numbersPresence && !upperPresence && !lowerPresence && specialPresence){
    numbersSpecial = numbers.concat(specialCharacters);
  } else if(!numbersPresence && !upperPresence && lowerPresence && specialPresence){
    lowerSpecial = lowercaseLetters.concat(specialCharacters);
  } else if(numbersPresence && !upperPresence && lowerPresence && !specialPresence){
    numbersLower = lowercaseLetters.concat(numbers);
  } else if(!numbersPresence && upperPresence && !lowerPresence && specialPresence){
    upperSpecial = uppercaseLetters.concat(specialCharacters);
  } else if(numbersPresence && upperPresence && !lowerPresence && !specialPresence){
    numbersUpper = uppercaseLetters.concat(numbers);
  } else if(!numbersPresence && upperPresence && lowerPresence && !specialPresence){
    upperLower = uppercaseLetters.concat(lowercaseLetters);
  } else if(!numbersPresence && !upperPresence && !lowerPresence && specialPresence){
    justSpecial = specialCharacters;
  } else if(!numbersPresence && !upperPresence && lowerPresence && !specialPresence){
    justLower = lowercaseLetters;
  } else if(!numbersPresence && upperPresence && !lowerPresence && !specialPresence){
    justUpper = uppercaseLetters;
  } else if(numbersPresence && !upperPresence && !lowerPresence && !specialPresence){
    justNumbers = numbers;
  };

  //Create password array
  var password = [];

  //Generate function that locates which pre-created bucket is no longer empty and randomly select characters from that bucket until the length equals the passwordLength determined by the user prompt at the beginning
  function giveMeRandom(x) {
    if(x !=null){
      for (var i = 0; i < passwordLength; i++) {
        password.push(x[Math.floor(Math.random() * x.length)]);
      }
    }
  };

  //Run the function for each variable to find non-empty bucket  
  giveMeRandom(everyOption);
  giveMeRandom(allButSpecial);
  giveMeRandom(allButNumbers);
  giveMeRandom(allButLower);
  giveMeRandom(allButUpper);
  giveMeRandom(numbersSpecial);
  giveMeRandom(lowerSpecial);
  giveMeRandom(numbersLower);
  giveMeRandom(upperSpecial);
  giveMeRandom(numbersUpper);
  giveMeRandom(upperLower);
  giveMeRandom(justSpecial);
  giveMeRandom(justLower);
  giveMeRandom(justUpper);
  giveMeRandom(justNumbers);

  //Create empty bucket for guaranteed characters
  var guaranteedBucket = [];

  //if any of the presence variables are true pull one random character from the associated array and add it to the guaranteed bucket
  if(upperPresence){
    guaranteedBucket.push(uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]);
  };

  if(lowerPresence){
    guaranteedBucket.push(lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]);
  };

  if(numbersPresence){
    guaranteedBucket.push(numbers[Math.floor(Math.random() * numbers.length)]);
  };

  if(specialPresence){
    guaranteedBucket.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
  };

  //replace i amount of characters of password based on guaranteed bucket length
  for(var i = 0; i < guaranteedBucket.length; i++){
    password[i] = guaranteedBucket[i].replace();
  };

  //create a password variable that joins the characters of the password array together
  var passwordjoined = password.join('');

  //return the joined password in the textbox on the webpage
  return passwordjoined;

};





