[![Build Status](https://travis-ci.org/bluej100/eratosthing.svg?branch=master)](https://travis-ci.org/bluej100/eratosthing)

This implements in JavaScript an online algorithm for finding successive primes in O(n log n) using a priority queue of composites, as proposed by [Melissa O'Neill](https://www.cs.hmc.edu/~oneill/index.html) in her 2008 [The Genuine Sieve of Eratosthenes](http://www.cs.hmc.edu/~oneill/papers/Sieve-JFP.pdf).

Finding her paper allowed me to reduce runtime by 60% by starting each filter at at n^2, rather than n\*2, and by using her unrolled wheel of candidates.

Installation
------------

```
npm install eratosthing
```

Usage
-----

```
const eratosthing = require("eratosthing");
let generator = eratosthing();
let value = generator.next().value;
```

Testing
-------

```
npm test
```
