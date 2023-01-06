const Shoe = require('./Shoe');
class Heel extends Shoe {
    /**
   * This function is the constructor function for a Heel object 
   * @constructor
   * @param {string} type - This is the type of shoe
   * @param {string} brand - This is the initial brand of the shoe (will be a private instance variable)
   * @param {string} color - This is the initial color of the Heel object (private instance)
   * @param {string} material - This is the initial material of the Heel object (private instance)
   * @param {number} price - This is the price of the Heel object (private instance)
   * @param {number} heelHeight - This is the heelHeight of the Heel object (private instance)
   * @param {string} occasion - This is the occasion the Heel object is meant to be worn on (private instance)
   */
  constructor (type, brand, color, material, price, heelHeight, occasion)  {
  super(type, brand, color, material, price) 
  this.heelHeight = heelHeight
  this.occasion = occasion
  }
    /**
   * Returns the heelHeight of the Heel
   *
   * @returns {number} - the heelHeight of Heel
   */
  getHeelHeight(){
    return this.heelHeight
  }
    /**
   * Returns the occasion the shoe is meant to be worn on 
   *
   * @returns {string} - the intended occasion of shoe
   */
  getOccasion(){
    this.occasion
  }
    /**
   * Returns the description of the Heel
   *
   * @returns {string} - description includes type, brand, color, material, price, heel height, and occasion 
   */
  getDescription(){
    return this.type + ' from ' + this.brand + ' in the color ' + this.color + ' made of ' + this.material + ' for $' + this.price + '. They have a ' + this.heelHeight + ' inch tall heel and are meant for a ' + this.occasion + '.'
  }
  /**
   * Discounts the price of the shoe by 15%
   *  
   * @returns {number} price - Returns the new discounted price of the shoe
   */
  discountShoe(){
    this.price = this.price * 0.85
    return this.price 
  }
}
module.exports = Heel;