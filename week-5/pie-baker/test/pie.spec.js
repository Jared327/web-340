'use strict';
/*
Author: Jared Dwyer
Date: 11/22/24
File Name: pie.spec.js

*/
const pieBaker = require("../src/myPie");

// Test for bakePie
describe("pieBaker", () => {
  let log;
  let exit;

  // Runs before each test
  beforeEach(() => {
    // Spy on the console's log method
    log = jest.spyOn(console, "log");

    // Prevent the test from exiting.
    exit = jest.spyOn(process, "exit").mockImplementation((code) => code);
  });

  // Runs after each test
  afterEach(() => {
    log.mockRestore();
    exit.mockRestore();
  })

// Test for bakePie successful
test("Pie bake successful", () => {
  let pieIngredients = ["flour", "sugar", "butter"];
  let pieName = "myPie";

  pieBaker.bakePie(pieName, pieIngredients);
  expect(log).toHaveBeenCalledWith("success");
  expect(exit).not.toHaveBeenCalled();
});

// Test for bakePie not successful
test("Pie not baked", () => {
  let pieIngredients = ["flour", "butter"];
  let pieName = "myPie";

  pieBaker.bakePie(pieName, pieIngredients);
  expect(log).toHaveBeenCalledWith("unsuccessful");
  expect(exit).toHaveBeenCalledWith(1);
});

// Test with extra ingredients
test("Pie baked with additional ingredients", () => {
  let pieIngredients = ["flour", "sugar", "butter", "canned apples"];
  let pieName = "myPie";

  pieBaker.bakePie(pieName, pieIngredients);
  expect(log).toHaveBeenCalledWith("success");
  expect(exit).not.toHaveBeenCalled();
});
});