//-----------------------------------------------------------------------------
//Name:        recursion-2.js
//Purpose:     To provide recursive functions in Javascript that   
//             extract the evenly divisible numbers from an array 
//
// Author:      Gaurika Mahajan
// Created:     07-Mar-2022
// Updated:     10-Mar-2022
//-----------------------------------------------------------------------------
/**
  * Returns array with unique divisible numbers 
  * 
  * @param {array} arr - the array to search through for divisible numbers
  * @param {number} number - the number that array values are checked to be divisible by
  * @returns {array} myArray - array of unique numbers that are divisible by number
  */
function extractEvenlyDivisible(arr, number){ 
  const myArray = []                            //creating empty array
  let index = 0                                 //set index value to 0 
  /**
  * Returns array value  
  * @param {number} index - the index value for each element of array
  * @param {array} arr - the array to search through for divisible numbers
  * @param {number} number - the number that array values are checked to be divisible by
  * @returns {array} myArray - array of unique numbers that are divisible by number
  */
  function helper(index, arr, number){          //helper function that iterates through array
    if (index > arr.length -1){                 //base case condition (outside of array)
      return                                    //exit
    }
    else if (arr[index] % number ==0 ){         //if array value is divisible by said number
      myArray.push(arr[index]);                 //adds that value into empty array
      return helper(index +1,arr, number)       //recursive call to helper function to test every value of array
    }
    else if (arr[index] % number !=0 ){         //if array value is not divisible by said number 
      return helper(index +1,arr, number)       //recursive call to helper function
    }
    
  }
  helper(index, arr, number)                    //calls helper function within main function
  return [...new Set(myArray.sort())]           //returns myArray after it is sorted and duplicated values are removed
   }

//MAIN CODE
console.log(extractEvenlyDivisible([1,9,3,4,3,6,7,8,9], 3))