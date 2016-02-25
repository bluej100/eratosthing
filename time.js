'use strict';

const eratosthing = require('./index');
const iterations = 100 * 1000;
const maxValue = 2 * 1000 * 1000;

let generator;
let start;
let lastValue;

generator = eratosthing();
start = Date.now();
for (let i = 0; i < iterations; i++) {
  lastValue = generator.next().value;
}

console.log(iterations + 'th prime: ' + lastValue);
console.log('Time: ' + (Date.now() - start) + 'ms');

generator = eratosthing(maxValue);
start = Date.now();
for (var prime of generator) {
  lastValue = prime;
}

console.log('Last prime before ' + maxValue + ': ' + lastValue);
console.log('Time: ' + (Date.now() - start) + 'ms');
