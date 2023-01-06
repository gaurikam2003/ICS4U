const Coord = require('./datagen.js');
const {generateData} = require('./datagen.js');
var fs = require("fs")
/**
 * Insertion sort
 * 
 * Time complexity: O(N^2)
 *   - outperforms more complex sorts with small lists due to its low hidden constant value
 * 
 * Also tracks the time taken for the algorithm to run
 */

/**
 * Sorts an array in ascending order
 * @param {array} - arr, the array to be sorted
 * @returns {array} - array, the sorted array
 */
function insertionSort (arr) {
  for(let i = 0; i < arr.length; i++ ) {
    let temp = arr[i];    
    let j = i;
    while(j > 0 && temp.x < arr[j-1].x) {
      arr[j] = arr[j-1];   
      j=j- 1;
    }
    arr[j] = temp     
     } 
  return arr
}
/**
 * Linear search 
 * 
 * Time complexity: O(N)
 *   - slower at large scales
 * 
 */

/**
 * Searches the array for element x
 * @param {array} arr - array to be searched for target
 * @param {integer} target - the value to be found
 * @returns {integer} - position of the target, -1 if target is not found
 */
function linearSearch(arr, target){
  for(let j = 0; j < arr.length; j++ ) {
    if (arr[j].x == target){
      return j
    }
  }
  return -1
}
/**
 * Built in Sort
* implements the built in javascript sorting function
 */

 /**
  * Recursively searches the array for the element x
  * @param {array} array sorted array to sort
  * @returns {array} sortedArray, sorted version of array 
  */
function builtInSort(array){
  var startTime = performance.now()
  let sortedArray = array.sort()
  var endTime=performance.now()
  let timeForFunction = endTime - startTime
  console.log("It took " + timeForFunction + " milliseconds to built in search this array.")
  return sortedArray
}
/**
 * Binary Search
 *
 * Time complexity: O(logN)
 *   - significantly faster than linear search at scale
 * array must be sorted
 */

 /**
  * Searches the array for the element x
  * @param {array} array sorted array to search in
  * @param {number} target, the element to find
  * @returns {integer} position of element in array, -1 if not found
  */
function binarySearch(array, target){
  let n = array.length
  let start = 0
  let end = n-1
  let middle 
  while(start<=end){
    middle = Math.floor(((start+end)/2))
    if (array[middle].x == target){
      return middle
    }
    else if (target > array[middle].x){
      start = middle + 1
    }
    else {
      end = middle - 1
    }
  }
  return -1
}

//main code
arr = generateData(5) 
var startTime = performance.now()
  console.log("before sorting")
  for(let i = 0; i < arr.length; i++ ) {
    if (i<20 || i > arr.length-20) {
      console.log("x: " + arr[i].x + " y: " + arr[i].y)
    }
  }
array = insertionSort(arr)
console.log("after sorting")
  for(let i = 0; i < array.length; i++ ) {
    if (i<20 || i > array.length-20) {
      console.log("x: " + array[i].x + " y: " + array[i].y)
    }
  }
  var endTime = performance.now()
  let timeForFunction = endTime - startTime
  console.log("It took " + timeForFunction + " milliseconds to insertion sort this array.")

var startTime = performance.now()
if ((linearSearch(array,2)) == -1) {
  var endTime=performance.now()
  let timeForFunction = endTime - startTime
  console.log("It took " + timeForFunction + " milliseconds to linear search this array and the value was not found.")
}
else {
  var endTime=performance.now()
  let timeForFunction = endTime - startTime
  console.log("It took " + timeForFunction + " milliseconds to linear search this array and the value was found")
}

var startTime = performance.now()
if ((binarySearch(array,2)) == -1) {
  var endTime = performance.now()
  let timeForFunction = endTime - startTime
  console.log("It took " + timeForFunction + " milliseconds to binary search this array and the target was not found.")
}
else {
  var endTime = performance.now()
  let timeForFunction = endTime - startTime
  console.log("It took " + timeForFunction + " milliseconds to binary search this array.")
}
