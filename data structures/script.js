const Shoe = require('./Shoe');
const Heel = require('./Heel');
const Boot = require('./Boot');
const Sneaker = require('./Sneaker');
var fs = require("fs")

let itemList = [];
/**
  * Reads the text file and creates the appropriate Shoe objects depending on the itemType (ex. Shoe, Heel, Sneaker, Boot objects). Then writes the description of each Shoe object into another text file. 
  * 
  * @param void
  *
  * @returns void
  */
function createObjectsFromFile(){
  const data = fs.readFileSync('information.txt', 'UTF-8');
  const lines = data.split(/\r?\n/);
  lines.forEach((line) => {
    var [itemType, itemName, brand, color, material, itemPrice] = line.split(",");
    itemPrice = Number(itemPrice)
    if (itemType == "shoe"){
      shoeObject = new Shoe(itemName, brand, color, material, itemPrice)
    }
    if (itemType == "heel"){
      if (itemName.includes("Sandal")){
        shoeObject = new Heel(itemName, brand, color, material, itemPrice, "1", "picnic")
      }
      else if (itemName.includes("Stilleto")){
        shoeObject = new Heel(itemName, brand, color, material, itemPrice, "4", "party")
      }
      else if (itemName.includes("Wedge")){
        shoeObject = new Heel(itemName, brand, color, material, itemPrice, "4", "casual party")
      }
    }
    if (itemType == "sneaker"){
      shoeObject = new Sneaker(itemName, brand, color, material, itemPrice, "breathable", "4")
    }
    if (itemType == "boot"){
      if (itemName.includes("Ankle")){
        shoeObject = new Boot(itemName, brand, color, material, itemPrice, "ankle length")
      }
      else if (itemName.includes("Cowboy")){
        shoeObject = new Boot(itemName, brand, color, material, itemPrice, "mid-calf length")
      }
    }
    else {
      shoeObject = new Shoe(itemName, brand, color, material, itemPrice)
    }
    itemList.push(shoeObject.getDescription());
  });
  const writeStream = fs.createWriteStream('catalog.txt');

  itemList.forEach(value => writeStream.write(value + "\n"));

  writeStream.on('finish', () => {
   console.log("wrote all the array data to file");
  });

  writeStream.on('error', (err) => {
    console.error("There is an error writing the file" + err)
  });

  writeStream.end();
}
const shoeOne = new Shoe("Sneakers","Nike", "black","rubber", 5.99)
const shoeTwo = new Heel("Heels", "Louis Vuitton", "black", "leather", 56.99, 4, "party")

console.log(shoeOne.getType());
console.log(shoeOne.getPrice());
console.log(shoeOne.getBrand());
console.log(shoeOne.getDescription());
console.log(shoeTwo.getType());
console.log(shoeTwo.getHeelHeight());
console.log(shoeTwo.getDescription());
createObjectsFromFile();