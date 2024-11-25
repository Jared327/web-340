"use strict";
/*
Author: Jared Dwyer
Date: 11/22/24
File Name: myPie.js

*/

function bakePie(pieType, ingredients) {
  let hasEssential = true;
  let essential = [
    "flour",
    "sugar",
    "butter"
  ];

  // convert inputs to lowercase for misspell cases
  let lcIngredients = ingredients.map(i => i.toLowerCase());
  for (let ingredient of essential) {
    if (!lcIngredients.includes(ingredient)) {
      hasEssential = false;
    }
  }

  if (hasEssential) {
    console.log("success");
  } else {
    console.log("unsuccessful");
    process.exit(1);
  }
}

module.exports = { bakePie };