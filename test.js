'use strict';

const eratosthing = require('./index');
const assert = require('assert');

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
let generator = eratosthing();

primes.forEach(function(prime) {
  assert.equal(generator.next().value, prime);
});

console.log('success!');
