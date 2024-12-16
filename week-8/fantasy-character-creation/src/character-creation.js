"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:
/*
const fs = require('fs');

function createCharacter(character, callback) {
  // TODO: Implement this function
}

function getCharacters(callback) {
  // TODO: Implement this function
}
*/

// For promises:
const fs = require('fs').promises;
const { join } = require("path");

// Create variable for path and file
const CHARACTER_INFO = join(__dirname, "character.text");

async function createCharacter(character) {
  // TODO: Implement this function
  try {
    const info = character.join("\n");

    // Write info
    await fs.writeFile(CHARACTER_INFO, info, "utf-8");

    // log for success
    console.log("Character created.")
  } catch(err) {
    throw(err);
  }
}

async function getCharacters() {
  // TODO: Implement this function
  try {
    // Read info
    const data = await fs.readFile(CHARACTER_INFO, "utf-8");

    // Convert data
    const characterInfo = data.split("\n").filter(characterAttribute => characterAttribute);
    return characterInfo;
  } catch(err) {
    throw(err);
  }
}


// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

// module.exports = { createCharacter, getCharacters }; // For callbacks
module.exports = { createCharacter, getCharacters }; // For promises