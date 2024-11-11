"use strict";
const { error } = require("console");

function calculateDistance(planet1, planet2) {
  // Create array to hold distances
  // source: https://www.jpl.nasa.gov/_edu/pdfs/scaless_reference.pdf
  let distanceSun = {
    "Mercury": 0.39,
    "Venus": 0.72,
    "Earth": 1,
    "Mars": 1.52,
    "Jupiter": 5.2,
    "Saturn": 9.54,
    "Uranus": 19.2,
    "Neptune": 30.06
  };

  let distance1 = distanceSun[planet1];
  let distance2 = distanceSun[planet2];

  // Check if planets are in array
  if (distance1 === undefined || distance2 === undefined) {
    throw new Error("Invalid planet name provided");
  }

  // Calculate planet distances fixing result to two decimal places
  return Math.abs(distance1 - distance2).toFixed(2) + " AU";
}

module.exports = calculateDistance;