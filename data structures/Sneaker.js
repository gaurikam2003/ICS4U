const Shoe = require('./Shoe');
class Sneaker extends Shoe {
  /**
   * This function is the constructor function for a  object 
   * @constructor
   * @param {string} type - This is the type of shoe
   * @param {string} brand - This is the initial brand of the Sneaker object (will be a private instance variable)
   * @param {string} color - This is the initial color of the Sneaker object (private instance)
   * @param {string} material - This is the initial material of the Sneaker object (private instance)
   * @param {number} price - This is the initial price of the Sneaker object (private instance)
   * @param {string} breathability - Yes or No depending on if the Sneaker is breathable (private instance)
   * @param {number} weight - This is the initial weight of the Sneaker (private instance)
   */
  constructor (type, brand, color, material, price, breathability, weight) {
    super(type, brand, color, material, price) 
    this.breathability = breathability
    this.weight = weight
  }
  /**
   * Returns breathable if the Sneaker is breathable and not breathable if Sneaker is not
   *
   * @returns {string} - breathability of the sneaker
   */
  getBreathability () {
    return this.breathability;
  }
  /**
   * Returns the weight of the Sneaker
   *
   * @returns {number} - the weight of Sneaker
   */
  getWeight () {
    return this.weight;
  }
  /**
   * Returns the description of the Sneaker
   *
   * @returns {string} - description includes type, brand, color, material, price, breathability, and weight 
   */
  getDescription(){
    return this.type + ' from ' + this.brand + ' in the color ' + this.color + ' made of  ' + this.material + ' for $' + this.price + '. They are ' + this.breathability + ' and weigh ' + this.weight + ' grams.'
  }
  /**
   * Discounts the price of the sneaker by 20%
   *  
   * @returns {number} price - Returns the new discounted price of the Sneaker
   */
  discountShoe(){
    this.price = this.price * 0.80
    return this.price 
  }
}
module.exports = Sneaker;