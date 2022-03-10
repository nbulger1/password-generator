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

  var upperPresence = false;
  var lowerPresence = false;
  var specialPresence = false;
  var numbersPresence = false;

  let userPassLength = prompt("How long is your desired password? (8-128 characters)", "10");
  //store the password length as a variable
  var passwordLength = userPassLength;
  //validation for passwordLength to ensure the entered value is an integer between 8 and 128
  if(passwordLength < 8){
    alert("Please enter an integer value between 8 and 128");
    let userPassLength = prompt("How long is your desired password? (8-128 characters)", "10");
    //store the password length as a variable
    passwordLength = userPassLength;
  } else if(passwordLength > 128) {
    alert("Please enter an integer value between 8 and 128");
    let userPassLength = prompt("How long is your desired password? (8-128 characters)", "10");
    //store the password length as a variable
    passwordLength = userPassLength;
  } else if(isNaN(passwordLength)) {
    alert("Please enter an integer value between 8 and 128");
    let userPassLength = prompt("How long is your desired password? (8-128 characters)", "10");
    //store the password length as a variable
    passwordLength = userPassLength;
  }

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
    alert("Please select at least one type of characters you desire");

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

  //Locate which pre-created bucket is no longer empty and randomly select characters from that bucket until the length equals the passwordLength determined by the user prompt at the beginning
  if(everyOption != null){
    for (var i = 0; i < passwordLength; i++) {
      password.push(everyOption[Math.floor(Math.random() * everyOption.length)]);
    }
  }
  
  if(allButSpecial != null){
    for (var i = 0; i < passwordLength; i++) {
      password.push(allButSpecial[Math.floor(Math.random() * allButSpecial.length)]);
    }
  }  

  if(allButNumbers != null){
    for (var i = 0; i < passwordLength; i++) {
      password.push(allButNumbers[Math.floor(Math.random() * allButNumbers.length)]);
    }
  }  
  
  if(allButLower != null){
    for (var i = 0; i < passwordLength; i++) {
      password.push(allButLower[Math.floor(Math.random() * allButLower.length)]);
    }
  }  

  if(allButUpper != null){
    for (var i = 0; i < passwordLength; i++) {
      password.push(allButUpper[Math.floor(Math.random() * allButUpper.length)]);
    }
  }  

  if(numbersSpecial != null){
    for (var i = 0; i < passwordLength; i++) {
      password.push(numbersSpecial[Math.floor(Math.random() * numbersSpecial.length)]);
    }
  }  

  if(lowerSpecial != null){
    for (var i = 0; i < passwordLength; i++) {
      password.push(lowerSpecial[Math.floor(Math.random() * lowerSpecial.length)]);
    }
  }  

  if(numbersLower != null){
    for (var i = 0; i < passwordLength; i++) {
      password.push(numbersLower[Math.floor(Math.random() * numbersLower.length)]);
    }
  }  

  if(upperSpecial != null){
    for (var i = 0; i < passwordLength; i++) {
      password.push(upperSpecial[Math.floor(Math.random() * upperSpecial.length)]);
    }
  }  

  if(numbersUpper != null){
    for (var i = 0; i < passwordLength; i++) {
      password.push(numbersUpper[Math.floor(Math.random() * numbersUpper.length)]);
    }
  }  

  if(upperLower != null){
    for (var i = 0; i < passwordLength; i++) {
      password.push(upperLower[Math.floor(Math.random() * upperLower.length)]);
    }
  }  

  if(justSpecial != null){
    for (var i = 0; i < passwordLength; i++) {
      password.push(justSpecial[Math.floor(Math.random() * justSpecial.length)]);
    }
  } 

  if(justLower != null){
    for (var i = 0; i < passwordLength; i++) {
      password.push(justLower[Math.floor(Math.random() * justLower.length)]);
    }
  } 

  if(justUpper != null){
    for (var i = 0; i < passwordLength; i++) {
      password.push(justUpper[Math.floor(Math.random() * justUpper.length)]);
    }
  } 

  if(justNumbers != null){
    for (var i = 0; i < passwordLength; i++) {
      password.push(justNumbers[Math.floor(Math.random() * justNumbers.length)]);
    }
  } 

  var passwordjoined = password.join('');
  console.log(passwordjoined);

  //empty array of guaranteed characters - use math.random grab from the bucket they want that was created before this function and add those to the empty array (0-4 depending) - go over the password x times and replace the first x characters with the guaranteed characters (for loop)

  //Take my new passwordjoined variable and returns it in the password generator box on the webpage
  return passwordjoined;

};



