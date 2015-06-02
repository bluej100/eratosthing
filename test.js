'use strict';

const eratosthing = require('./index');
const assert = require('assert');

(function testFirstPrimes() {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
  let generator = eratosthing();

  primes.forEach(function(prime) {
    assert.equal(generator.next().value, prime, 'first primes correct');
  });
})();

(function testLargePrime() {
  const iterations = 10 * 1000;
  let generator = eratosthing();
  let start = Date.now();
  let value;

  for (let i = 0; i < iterations; i++) {
    value = generator.next().value;
  }

  assert.equal(value, 104729, '10kth prime correct');
  assert(Date.now() - start < 200, '10k primes < 200ms');
})();

console.log('success!');
