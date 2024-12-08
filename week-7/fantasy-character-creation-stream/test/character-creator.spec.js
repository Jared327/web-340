"use strict";
/*
Author: Jared Dwyer
Date: 12/7/24
File Name: character-creator.spec.js
Description: Test file for character creation system
*/
const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // TODO: Write your test here
    // Create a test character
    const testCharacter = {
      class: "Rogue",
      gender: "Female",
      funFact: "is immune to all status effects"
    };

    // Write out the test parameter
    characterCreator.write(`${testCharacter.gender}, ${testCharacter.class}, ${testCharacter.funFact}`);

    characterCreator.on("data", (data) => {
      expect(data.toString().trim()).toBe(`A ${testCharacter.gender} ${testCharacter.class} has been created. Fun Fact: ${testCharacter.funFact}.`);
      done();
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    //TODO: Write your test here
    characterCreator.on("error", (err) => {
      expect(err.message).toBe("Invalid character data");
      done();
    });

    characterCreator.write("");
  });

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    // Create new test character
    const testCharacter = {
      class: "Warrior",
      gender: "Male",
      funFact: "Gains bonus attack stats when mead is consumed for a short period of time"
    };

    const dataToSend = `${testCharacter.gender}, ${testCharacter.class}, ${testCharacter.funFact}`;
    const expectedOutput = `A ${testCharacter.gender} ${testCharacter.class} has been created. Fun Fact: ${testCharacter.funFact}.`;

    characterCreator.write(dataToSend, "utf8", () => {
      characterCreator.on("data", (data) => {
        expect(data.toString().trim()).toBe(expectedOutput);
        done();
      });
    });
  });
});