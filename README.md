# Random Password Generator - Week 3 Homework

## Description

This application was based on starter HTML and CSS code. The goal was the enable users to generate random passwords based on their selection of various criteria. The app should run in the browser powered by Javascript code.

## Table of Contents

- [Criteria Buckets](#buckets)
- [Alerts, Confirms, and Prompts](#selections)
- [Combine Buckets](#combinations)
- [Function to Select Random](#random)
- [Guaranteed Bucket](#guaranteed)
- [Return Password](#return)
- [Tests](#tests)
- [Link](#link)

## Application

The user story was that an employee, with access to sensitive data, would like to randomly generate a password that meets certain criteria to improve security. The acceptance criteria included a button that could be pressed to generate the password. Once the button was pressed, the user would like to be presented with a series of prompts for the various criteria choices. The length of the password had to be anywhere between 8 and 128 characters. The user had to be able to choose to include uppercase, lowercase, numbers, and/or special characters. Each input needed to have validation including assuring that at least one character was selected. Finally, the give password needs to match the criteria selected and appear in the text box on the browser or in an alert box. 

## Buckets

I started out this random password generator by creating the four possible buckets of character options through four different arrays (specialCharacters, lowercaseLetters, uppercaseLetters, and numbers).

## Selections
 
Once setting all the user preferences to default false unless specified otherwise I created a prompt and four confirms for user input. The first prompt asks the user how long the user would like their password to be with a note that the value should be between 8 and 128 characters. I created a validation that pops up an alert box if the user enters a value less than 8, greater than 128, or something that is not a number and has them try a new value. From there I ask the user if they would like special characters, lowercase letters, uppercase letters, and/or numbers through confirm pop-ups that switch my default values to true. 

## Combinations

After gathering user input, I created several different buckets through empty arrays that represent all the possible combinations of characters the user could select. Then, based on user input, I concatinated the original arrays into the given bucket based on which presence values were switched to true.

## Random

Once I have a filled bucket of characters, I created I function to find the non-null bucket and randomly pull values from that new array up to the length of the password specified in the initial user prompt. Those values are pulled and pushed on to the end of a "password" array.

## Guaranteed

After generating a password array, I wanted to account for a situation in which a user chooses a few different character options but the random draw happens to miss one type of character. In order to address that situation, I created a guaranteed array and added one value from each original array if the user selected true in their confirm pop-up. For example, if the user selected lowercase letters and numbers then the guaranteed bucket may have [k, 1]. From there I replaced the first 1-4 values in the generated password with the values from the guaranteed bucket to make sure all the user chosen characters are present.

## Return

Finally, I used the join method to turn the password array into one long string and returned that joined value so it would pop-up in the textbox on the web browser. 

## Tests

To test my password generator, I continually clicked the password generate button and selected different criteria options to make sure the password length and character choices were correct. I also tried to type in password lengths that were not in between 8 and 128 or fail to select any character options to make sure my data validations worked as well. 

![GIF demonstrating testing a password of various lengths with different character choices as well as assessing data validations](https://github.com/nbulger1/password-generator/blob/main/assets/images/password_tester.gif)


## Link

See following for a link to my deployed application: https://nbulger1.github.io/password-generator/