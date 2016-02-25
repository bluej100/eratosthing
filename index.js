'use strict';

const PriorityQueue = require('js-priority-queue');

function scanComposites(composites, value) {
  let composite = false;
  while (composites.length && composites.peek().value <= value) {
    let next = composites.dequeue();
    if (next.value === value) {
      composite = true;
    }

    next.value += next.delta;
    composites.queue(next);
  }
  return composite;
}

const wheel2357 = [
  10, 2, 4, 2, 4, 6, 2, 6,
  4, 2, 4, 6, 6, 2, 6, 4,
  2, 6, 4, 6, 8, 4, 2, 4,
  2, 4, 8, 6, 4, 6, 2, 4,
  6, 2, 6, 6, 4, 2, 4, 6,
  2, 6, 4, 2, 4, 2, 10, 2,
];

module.exports = function*(max) {
  let factorCap = max ? Math.sqrt(max) : undefined;
  let comparator = function(a, b) { return a.value - b.value; };
  let composites = new PriorityQueue({comparator: comparator});

  yield 2;
  yield 3;
  yield 5;
  yield 7;

  let value, notch;
  for (value = 1, notch = 0; true; notch = (notch + 1) % wheel2357.length) {
    value += wheel2357[notch];

    if (max && value > max) { break; }
    if (scanComposites(composites, value)) { continue; }
    yield value;
    if (factorCap && value > factorCap) { continue; }
    composites.queue({ value: value * value, delta: value * 2 });
  }
};
