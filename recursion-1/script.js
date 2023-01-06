//-----------------------------------------------------------------------------
//Name:        recursion-1.js
//Purpose:     To provide recursive functions in Javascript
//             that countdown twice from given number
// Author:      Gaurika Mahajan
// Created:     07-Mar-2022
// Updated:     11-Mar-2022
//-----------------------------------------------------------------------------
/**
  * Returns countdown from num 
  * 
  * @param {number} num - the number that countdown begins at
  * @returns {number} - numbers counting down from num
  */

function firstCountdown(num) { //defining first countdown

  if (num <1) {//base case (end of the function)
    return num; 
  }
  else if (num>=1){
    console.log(num) //prints out number
    return firstCountdown(num-1) //recursive, creates countdown
  }
  } 

/**
  * Returns double countdown from num 
  * 
  * @param {number} num - the number that countdown begins at
  * @returns {number} - numbers counting down from num
  */
function doubleCountdown(number){ //second countdown function
  firstCountdown(number) //calling countdown function to print out first set of countdown
  firstCountdown(number-1) //starts the second countdown
  console.log(0)
  return;
}
//main code 
doubleCountdown(5);