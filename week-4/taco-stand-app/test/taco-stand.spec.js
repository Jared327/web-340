/**
 * Author:
 * Date:
 * File Name:
 * Description:
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/tacoStand");
const tacoStand = new TacoStandEmitter();

// TODO: Write tests for the TacoStandEmitter methods

// Test to check if customer is served
function testServeCustomer() {
  try {
    tacoStand.on("serve", (customer) => {assert.strictEqual(customer, "Jared");
      console.log("Passed testServeCustomer");
    });
    // call customer
    tacoStand.testServeCustomer("Jared");
  } catch(err) {
    console.error(`Failed testServeCustomer: ${err}`);
    return false;
  }
}

// Test to check "rush" is handled
function testHandleRush() {
  try {
    tacoStand.on("rush", rush => {assert.strictEqual(rush, "onFly");
      console.log("Passed testHandleRush");
    });
    // Call rush
    tacoStand.handleRush("onFly");
  } catch(err) {
    console.error(`Failed testHandleRush: ${err}`);
    return false;
  }
}


function testPrepareTaco() {
  try {
    tacoStand.on("prepare", (taco) => {assert.strictEqual(customer, "Chicken");
      console.log("Passed testPrepareTaco");
    });
    // Call Prepare
    tacoStand.serveCustomer("Chicken");
  } catch(err) {
    console.error(`Failed testPrepareTaco: ${err}`);
    return false;
  }
}

// Call test functions
function main() {
  testServeCustomer();
  testHandleRush();
  testPrepareTaco();
}

main();