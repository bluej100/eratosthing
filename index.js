'use strict';

const PriorityQueue = require('js-priority-queue');

function scanComposites(composites, value) {
  let composite = false;
  while (composites.length && composites.peek().value === value) {
    composite = true;
    let next = composites.dequeue();
    next.value += next.delta;
    composites.queue(next);
  }
  return composite;
}

module.exports = function*() {
  let comparator = function(a, b) { return a.value - b.value; };
  let composites = new PriorityQueue({comparator: comparator});
  yield 2;
  for (let value = 3; true; value += 2) {
    if (!scanComposites(composites, value)) {
      yield value;
      composites.queue({ value: value * 3, delta: value * 2 });
    }
  }
};
