"use strict";

const { error } = require('console');
const { writeFile } = require('fs');

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
// const fs = require('fs');

// For promises:
const fs = require('fs').promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    // TODO: Set up your mocks here

    // Use jest to read a mock file
    jest.spyOn(fs, "readFile").mockImplementation(() => Promise.resolve("Mage\nFemale\nIs not allowed to wear Heavy Armor"));

    // Use jest to write a mock file
    jest.spyOn(fs, "writeFile").mockImplementation(() => Promise.resolve());

    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  // TODO: Write your tests here. You should have at least three tests:

  // 1. Test that createCharacter writes a new character to the file
  test("writes a new character to a file", async () => {
    const character = ["Mage", "Female", "Is not allowed to wear Heavy Armor"];
    await expect(createCharacter(character));
  });

  // 2. Test that getCharacters reads characters from the file
  test("reads character from a file", async () => {
    const characterInfo = await getCharacters();
    expect(characterInfo).toEqual(["Mage", "Female", "Is not allowed to wear Heavy Armor"]);
  });

  // 3. Test that createCharacter handles errors when writing to the file
  test("handles errors when writing to a file", async () => {
    fs.writeFile.mockImplementationOnce(() => Promise.reject(new error("Error writing file")));

    await expect(createCharacter(["Mage", "Female", "Is not allowed to wear Heavy Armor"])).rejects.toThrow("Error writing File");
  });

});