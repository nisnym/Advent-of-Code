const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8').split('\n');

const line = input.map(line => [...line].map(Number));

console.log(line);


