const Shoe = require('./Shoe');
class Boot extends Shoe {
  /**
   * This function is the constructor function for a Boot object 
   * @constructor
   * @param {string} type - This is the type of shoe
   * @param {string} brand - This is the initial brand of the sboe (will be a private instance variable)
   * @param {string} color - This is the initial color of the Boot object (private instance)
   * @param {string} material - This is the initial material of the Boot object (private instance)
   * @param {number} price - This is the initial price of the Boot object (private instance)
   * @param {String} bootHeight - This is the initial height of the Boot object (private instance)
   */
  constructor (type, brand, color, material, price, bootHeight)  {
  super(type, brand, color, material, price) 
  this.bootHeight = bootHeight
  }
  /**
   * Returns the bootHeight of the Boot
   *
   * @returns {float} - the bootHeight of Boot
   */
  getBootHeight(){
    return this.bootHeight
  }
  /**
   * Returns the description of the boot
   *
   * @returns {string} - description includes type, brand, color, material, price, boot height, and occasion 
   */
  getDescription(){
    return this.type + ' from ' + this.brand + ' in the color ' + this.color + ' made of ' + this.material + ' for $' + this.price + '. They are ' + this.bootHeight + '.'
  }
  /**
   * Discounts the price of the shoe by 25%
   *  
   * @returns {number} price - Returns the new discounted price of the shoe
   */
  discountShoe(){
    this.price = this.price * 0.75
    return this.price 
  }
}
module.exports = Boot;