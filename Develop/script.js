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

//Notes on approaching the homework from office hours day 2

//characters, numbers, lowercase, uppercase - make different buckets for all of these - ARRAY :)

var specialCharacters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", "`"];
var uppercaseLetters = ["A", "B", "C", "INSERT"];
var lowercaseLetters = ["a", "b", "c", "INSERT"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  //Your code goes here

  //get user preferences 

  //Identify and collect the chosen buckets and pour into their own bucket

  //Create a guaranteed collection (array)

  //Create a password variable - starting as an empty array
  var password = [""];

  //pick a random element from the bucket - var items = items[Math.Floor(Math.random()*items.length;

  //store the character in the local array password (will learn on Monday)

  //repeat as many times as they specify with a for loop

  //Loop through the guaranteed bucket and replace elements in password array

  //Tack everything in the array together as one password

  //Return the password string

}