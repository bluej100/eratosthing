'use strict';

const eratosthing = require('./index');
const iterations = 100 * 1000;

let generator = eratosthing();
let start = Date.now();
let value;

for (let i = 0; i < iterations; i++) {
  value = generator.next().value;
}

console.log(iterations + 'th prime: ' + value);
console.log('Time: ' + (Date.now() - start) + 'ms');
