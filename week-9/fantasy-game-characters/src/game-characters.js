// game-characters.js
"use strict";

const { spawn } = require("child_process");
const path = require("path");
const characterDataFile = "game-characters-data.js"

class GameCharacters {
  constructor(characterDataSource = characterDataFile) {
    // TODO: Set the script file path
    this.characterDataSource = path.join(__dirname, characterDataSource);
  }

  getCharacters(callback) {
    // TODO: Implement this method
    const child = spawn("node", [this.characterDataSource]);

    child.stdout.on("data", (data) => {
      const characterData = JSON.parse(data.toString());
      callback(characterData, null)
    });

    child.stderr.on("data", (errData) => {
      console.error(`stderr: ${errData}`);
      callback(null, new Error(errData.toString()));
    });

    child.on("error", (error) => {
      console.error(`spawn error: ${error}`);
      callback(null, error);
    });
  }
}

module.exports = { GameCharacters };