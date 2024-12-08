"use strict";
/*
Author: Jared Dwyer
Date: 12/6/24
File Name: server.js
Description: Fantasy Game Character Creation
*/
const http = require('http');
const url = require('url');

// TODO: Implement your server here

  const server = http.createServer((req, res) => {
    // TODO: Implement your routes here
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

  // Create three routes
  if (pathname === '/createCharacter' && req.method === 'POST') {
    // Establish variables
    let characterClass = query.characterClass;
    let gender = query.gender;
    let funFact = query.funFact;

    res.writeHead(201);
    res.end(`A ${gender} ${characterClass} has been created. Fun Fact: "${funFact}."`);
  } else if (pathname === '/confirmCharacter' && req.method === 'POST') {
    res.writeHead(200);
    res.end('Your Character is confirmed.');
  } else if (pathname === '/viewCharacter' && req.method === 'GET') {
    res.writeHead(200);
    res.end(`Class: ${query.characterClass}, Gender: ${query.gender}, Fun Fact: "${query.funFact}."`);
  } else {
    res.writeHead(404);
    res.end;
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;