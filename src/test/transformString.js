import transformString from '../transformString';

const assert = require('assert');

assert.equal(transformString('Simple String'), 'elpmiS gnirtS');
assert.equal(transformString(), 'meroL muspI roloD tiS temA');
assert.throws(() => transformString({1: 'hello world'}), Error);