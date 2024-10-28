/**
 * Author: Jared Dwyer
 * Date: 10/27/24
 * File Name: weight-converter.js
 * Description: script to convert pounds to kilograms
*/

"use strict";

function main() {

  // Display error is required argument is wrong
  if (process.argv,length != 3) {
    console.error("Usage: node weight-converter.js <pounds>");
    process.exit(1);

  }

  // Declare variables
  const pounds = process.argv[2];
  const kilograms = 0.45359237;

  // make sure input is a number
  if (isNaN(pounds)) {
    console.error("Input must be a number.");
    process.exit(1);
  }

  //
  console.log(pounds * kilograms).toFixed(2);
}

main();