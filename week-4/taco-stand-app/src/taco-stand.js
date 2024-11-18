/**
 * Author: Jared Dwyer
 * Date: 11/17/24
 * File Name: taco-stand.js
 * Description: Taco stand EventEmitter file
 */

const EventEmitter = require("events");

// TODO: Create a TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush
class TacoStandEmitter extends EventEmitter {
  constructor() {
    super();
  }

  // Emit "serve"
  serveCustomer(customer) {
    this.emit("serve", customer);
  }

  // Emit "prepare"
  prepareTaco(taco) {
    this.emit("prepare", taco);
  }

  // Emit "rush"
  handleRush(rush) {
    this.emit("rush", rush);
  }
}

module.exports = TacoStandEmitter;