const _ = require('lodash');

export default function transformArray (first = ['q', 'w', 'e', 'r', 't', 'y'],
                                        second = [3.14, 1, 5, 9, 2, 6, 5, 3, 5]) {

  if (Array.isArray (first) && Array.isArray (second)) {
    return _.compact(_.flatten(_.zip (first, second)));
  } else {
    throw new Error ('There must be two arguments, both of them must be an array;');
  }

}