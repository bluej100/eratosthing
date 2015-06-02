[![Build Status](https://travis-ci.org/bluej100/eratosthing.svg?branch=master)](https://travis-ci.org/bluej100/eratosthing)

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
