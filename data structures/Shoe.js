/**
 * This is the class used to create shoe objects
 */
class Shoe{
  /**
   * This function is the constructor function for a shoe object 
   * @constructor
   * @param {string} type - This is the type of shoe
   * @param {string} brand - This is the initial brand of the sboe (will be a private instance variable)
   * @param {string} color - This is the initial color of the shoe (private instance)
   * @param {string} material - This is the initial material of the shoe (private instance)
   * @param {number} price - This is the initial price of the book (private instance)
   */
  constructor(type, brand, color, material, price) {
    this.type = type;
    this.brand = brand;
    this.color = color;
    this.material = material;
    this.price = price;
  }
    /**
   * Returns the type of shoe
   *
   * @returns {string} - the type of shoe
   */
  getType () {
    return this.type;
  }
    /**
   * Returns the brand of shoe
   *
   * @returns {string} - the brand of shoe
   */
  getBrand () {
    return this.brand;
  }
   /**
   * Returns the color of shoe
   *
   * @returns {string} - the color of shoe
   */
  getColor () {
    return this.color;
  }
   /**
   * Returns the material of shoe
   *
   * @returns {string} - the material of shoe
   */
  getMaterial () {
    return this.material;
  }
   /**
   * Returns the price of shoe
   *
   * @returns {number} - the price of shoe
   */
  getPrice (){
    return this.price;
  }
   /**
   * Returns the description of shoe
   *
   * @returns {string} - description includes type, brand, color, material, and price 
   */
  getDescription(){
    return this.type + ' from ' + this.brand + ' in the color ' + this.color + ' made of ' + this.material + ' for $' + this.price + '.'
  }
  /**
   * Increases the price of the shoe book based on the value given, value must not be less than 0
   *  
   * @param {number} amount - This is the amount to increase the price by.
   * @returns {number} price - Returns the new price of the shoe
   */
  raisePrice(amount){
    if (amount < 0) {
      return this.price
    }
    else {
      return this.price + amount
    }
  }
  /**
   * Discounts the price of the shoe by 10%
   *  
   * @returns {number} price - Returns the new discounted price of the shoe
   */
  discountShoe(){
    this.price = this.price * 0.9
    return this.price 
  }
}

module.exports = Shoe;
