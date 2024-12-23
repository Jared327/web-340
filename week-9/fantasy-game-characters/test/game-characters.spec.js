// game-characters.spec.js
"use strict";


const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    // TODO: Implement this test
    gameCharacters.getCharacters((characterData, error) => {
      expect(error).toBeNull();
      expect(characterData).toEqual([
        { Class: "Warrior", Gender: "Male", Skill: "Gains bonus armor stacks when surrounded by enemies." },
        { Class: "Mage", Gender: "Female", Skill: "Gains bonus mana when using buffs on allies." },
        { Class: "Rogue", Gender: "Female", Skill: "Back stab attacks crit for 5x Damage."}
      ]);
    });
    done();
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // TODO: Implement this test
    let testScript = "no-data.js";

    const gameCharacters = new GameCharacters(testScript);

    gameCharacters.getCharacters((characterData, error) => {
      expect(characterData).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // TODO: Implement this test
    let testScript = "no-data.js";

    const gameCharacters = new GameCharacters(testScript);

    gameCharacters.getCharacters((characterData, error) => {
      expect(characterData).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});