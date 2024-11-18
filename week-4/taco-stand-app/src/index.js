/**
 * Author: Jared Dwyer
 * Date: 11/17/24
 * File Name: index.js
 * Description: File for TacoStand
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./tacoStand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the tacoStand object
// Serve
tacoStand.on("serve", (customer) => {
  console.log(`Serving: ${customer}`);
});

// Prepare
tacoStand.on("prepare", (taco) => {
  console.log(`Preparing order: ${taco} taco`);
});

// Rush
tacoStand.on("rush", (rush) => {
  console.log(`Rush Order: ${rush}`);
});

// Error
tacoStand.on("error", (err) => {
  console.error(`There is an error with your order:, ${err}`);
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // TODO: Handle the commands
  // Check for args
  if (args.length !== 1) {
    console.log("Please enter an argument.");
  } else {
    if (command === "serve") {
      tacoStand.serveCustomer(args[0]);
    } else if (command === "prepare") {
      tacoStand.prepareTaco(args[0]);
    } else if (command === "rush") {
      tacoStand.handleRush(args[0]);
    } else {
      console.log ('Choose the "serve", "prepare", or "rush", commands.');
    }
  }
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);