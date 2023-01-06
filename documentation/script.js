//-----------------------------------------------------------------------------
//Name:        Documentation i.e. docstrings (script.js)
//Purpose:     To provide an example of how to create docstrings in Javascript
//

//				here: https://numpydoc.readthedocs.io/en/latest/format.html with
//				some minor modifications based on Python 3 function annotations
//				(the -> notation).
//
// Author:      Gaurika Mahajan
// Created:     22-Feb-2022
// Updated:     24-Feb-2022
//-----------------------------------------------------------------------------

console.log("Hello World!");
/**
  * Adds two numbers
  * 
  * @param {number} firstNum - the first number to be added
  *@param {number} secondNum - the second number to be added
  *
  * @returns {number} the sum of the two numbers
  */
//BASIC FUNCTION
function addNumbers(firstNum, secondNum) {
    return firstNum + secondNum;
}
//FUNCTION W/ USER INPUT
/**
  * Returns appropriate message based on time of day
  * 
  * @param {number} time - time of day
  *
  * @returns {string} message - either "Good Morning" or "Good Afternoon" or "Good Night" or "invalid"
  */
function greeting(time){
  if(	0<=time && time <= 12){
    message = "Good Morning";
    return message;
  }  else if (time <= 18){
    message = "Good Afternoon";
    return message;
  }  else if (time<24){
    message = "Good Night";
    return message;
  }
  else{
    message = "invalid time";
    return message;
  }
}
//FOR WHILE LOOP
let i =0; //declaring variables
let text = ""; //blank text string
let endingNumber = parseInt(prompt('Enter a number: ')); //asking for user input
while (i < endingNumber) { //recurring until i is the ending number chosen by user
  i++; // incrementing i by 1
  console.log("The sum is " + i + "."); //what the new number is
}
// NEED TO ADD IN ARRAYS AND FOR LOOP

//FOR LOOP
//array list made of weather
const weather = ["rain", "sun", "clouds", "snow", "hail", "lightning and thunder"];
//iterating through array list
for (let t = 0; t < weather.length; t++) {
  text += weather[t] + ", ";
  console.log(text)
}
var userInput = prompt("State the time of day in 24-hour time and replace the colon with a period ");
alert("The message for you is " + greeting(userInput));

//main code
console.log(addNumbers(1,2));
console.log(greeting(12.45));