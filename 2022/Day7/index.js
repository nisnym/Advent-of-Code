// const fs = require('fs');

import fs from 'fs';

const input = fs.readFileSync('input.txt','utf-8');

const lines = input.split('\n');
console.log(typeof(lines), typeof(input));

const numbers = input.match(/\d+/g).map(Number);

console.log(numbers);
let total = 0;

for (const number of numbers){
    total += number;
}


console.log(total);