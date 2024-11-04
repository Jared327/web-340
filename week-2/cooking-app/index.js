/**
 * Author: Jared Dwyer
 * Date: 11/3/24
 * File Name: index.js
 * Description: Demonstration of module
*/

// TODO: Import your module using require
const {createRecipe, setTimer, quit } = require('./recipes');

// TODO: Implement your CLI program here
function main() {

  let tminutes = 15;

console.log(createRecipe(["milk", "heavy cream", "butter", "flour", "salt", "white pepper"])); // Props if you know what this makes
console.log(setTimer(tminutes));
console.log(quit());
}

main();