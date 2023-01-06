/**
 * This is the class used to create coordinate objects
 */
class Coord{
  /**
   * This function is the constructor function for a shoe object 
   * @constructor
   * @param {integer} x - this is the x value of the coordinate
   * @param {integer} y - this is the y value of the coordinate
   */
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
}
/**
 * Generate Random Coordinate Objects 
 * 
 * Generates array of coordinate objects of specified size
 */

/**
 * Generates array
 * @param {integer} - size, size of array
 * @returns {array} - newArray, the generated array
 */
function generateData(size){
  const newArray = []
  for (let i= 0; i < size; i++){
    x = Math.round(Math.random()*size)
    y = Math.round(Math.random()*size)
    coordinate = new Coord(x, y)
    newArray.push(coordinate)
    }
  return newArray
  }

module.exports = Coord;
module.exports = {generateData}