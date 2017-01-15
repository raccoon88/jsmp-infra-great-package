import transformArray from '../transformArray';

const assert = require ('assert');

assert.deepEqual (transformArray ([1, 2, 3], ['a', 'b', 'c']), [1, 'a', 2, 'b', 3, 'c']);
assert.deepEqual (transformArray (), ['q', 3.14, 'w', 1, 'e', 5, 'r', 9, 't', 2, 'y', 6, 5, 3, 5]);
assert.throws (() => transformArray (999, 'string'), Error);