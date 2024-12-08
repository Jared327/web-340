"use strict";
/*
Author: Jared Dwyer
Date: 12/6/24
File Name: server.spec.js
Description: Fantasy Game Character Creation Test
*/
const http = require('http');
const server = require('../src/server');

// TODO: Implement your tests here
// Create test suite
describe("server", () => {
  afterAll(() => {
    server.close();
  });

  // Test 1
  test('test /createCharacter POST request with query parameter', done => {
    const options = {
      hostname: 'localHost',
      port: 3000,
      method: 'POST',
      path: "/createCharacter?characterClass=Rogue&gender=Female&funFact=is%20immune%20to%20all%20status%20effects"
    };

    // Create request object
    const req = http.request(options, res => {
      let data = "";
      res.on("data", chunk => {
        data =+ chunk;
      });

      // Listener for response
      res.on("end", () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe('A Female Rogue has been created. Fun Fact: "is immune to all status effects."');
        done();
      });
    });

    req.end();
  });

  // Test 2
  test('test /confirmCharacter POST request', done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      method: 'POST',
      path: '/confirmCharacter'
    };

    const req = http.request(options, res => {
      let data = "";
      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        expect(res.statuscode).toBe(200);
        expect(data).toBe('Your Character is confirmed.');
        done();
      });
    });

    req.end();
  })

  // Test 3
  test('test /viewCharacter GET request', done => {
    http.get('http://localhost:3000/viewCharacter?characterClass=Rogue&gender=Female&funFact=is%20immune%20to%20all%20status%20effects', res => {
      let data = "";
      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        expect(res.statuscode).toBe(200);
        expect(data).toBe('Class: Rogue, Gender: Female, Fun Fact: "is immune to all status effects."');
        done();
      });
    });
  });

})