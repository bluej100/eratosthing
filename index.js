'use strict';

const PriorityQueue = require('js-priority-queue');

module.exports = function*() {
  let composites = new PriorityQueue({
    comparator: function(a, b) { return a.value - b.value; }
  });
  for (let value = 2; true; value++) {
    let prime = true;
    while (composites.length && composites.peek().value === value) {
      prime = false;
      let next = composites.dequeue();
      next.value += next.factor;
      composites.queue(next);
    }
    if (prime) {
      yield value;
      composites.queue({ factor: value, value: value * 2 });
    }
  }
};
