"use strict";
const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

// Test 1: Earth to Mars Distance
function testEarthToMars() {
  try {
    assert.strictEqual(calculateDistance("Earth", "Mars"), "0.52 AU");
    console.log("testEarthToMars PASSED!");
    return true;
  } catch(err) {
    console.error(`TestEarthToMars Failed: ${err.message}`);
    return false;
  }
}

// Test 2: Mercury to Neptune
function testMercuryToNeptune() {
  try {
    assert.strictEqual(calculateDistance("Mercury", "Neptune"), "29.67 AU");
    console.log("testMercuryToNeptune PASSED!");
    return true;
  } catch(err) {
    console.error(`testMercuryToNeptune Failed: ${err.message}`);
    return false;
  }
}

// Test 3: Mars to Jupiter
function testMarsToJupiter() {
  try {
    assert.strictEqual(calculateDistance('Mars', 'Jupiter'), "3.68 AU");
    console.log("testMarsToJupiter PASSED!");
    return true;
  } catch (error) {
    console.error(`testMarsToJupiter Failed: ${error.message}`);
    return false;
  }
}

// Call your test functions here
function main() {
testEarthToMars();
testMarsToJupiter();
testMercuryToNeptune();
}

main();