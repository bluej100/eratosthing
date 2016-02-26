'use strict';

function scanComposites(composites, value) {
  let values = composites[value];
  if (!values) { return false; }
  for (let i = 0; i < values.length; i++) {
    let delta = values[i];
    let key = value + delta;
    if (!composites[key]) { composites[key] = []; }
    composites[key].push(delta);
  }
  delete composites[value];
  return true;
}

module.exports = function*(max) {
  let factorCap = max ? Math.sqrt(max) : undefined;
  let comparator = function(a, b) { return a.value - b.value; };
  let composites = {};

  yield 2;
  let value;
  for (value = 3; true; value += 2) {
    if (max && value > max) { break; }
    if (scanComposites(composites, value)) { continue; }
    yield value;
    if (factorCap && value > factorCap) { continue; }
    let key = value * value;
    if (!composites[key]) { composites[key] = []; }
    composites[key].push(value * 2);
  }
};
