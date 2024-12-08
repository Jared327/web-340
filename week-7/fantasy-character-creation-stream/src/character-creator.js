"use strict";
/*
Author: Jared Dwyer
Date: 12/7/24
File Name: character-creator.js
Description: Character creator system file
*/
const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    this.queue = [];
    // TODO: Initialize your class here
    this.newCharacter = {
      class: "",
      gender: "",
      funFact: ""
    };
  }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    const sentCharacter = chunk.toString().trim().split(",");

    if(sentCharacter.length != 3) {
      callback(new Error("Invalid character data"));
      return;
    }

    // Convert character data out of a string
    this.newCharacter.class = sentCharacter[1].trim();
    this.newCharacter.gender = sentCharacter[0].trim();
    this.newCharacter.funFact = sentCharacter[2].trim();

    this.queue.push(`A ${this.newCharacter.gender} ${this.newCharacter.class} has been created. Fun Fact: ${this.newCharacter.funFact}.`);
    callback();
  }

  _read(size) {
    // TODO: Implement your _read method here
    if(this.queue.length) {
      this.push(this.queue.shift() + "\n");
    } else {
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;