'use strict';

const eratosthing = require('./index');
const assert = require('assert');

const firstPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

(function testFirstPrimes() {
  let generator = eratosthing();

  firstPrimes.forEach(function(prime) {
    let value = generator.next().value;
    assert.equal(value, prime, 'first primes correct');
  });
})();

(function testMax() {
  let generator = eratosthing(37);
  let primes = [];

  for (var prime of generator) {
    primes.push(prime);
  }

  assert.deepEqual(primes, firstPrimes, 'first primes correct via max');
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
