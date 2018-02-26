# js-isequal [![Build Status](https://travis-ci.org/iamdevonbutler/js-isequal.svg?branch=master)](https://travis-ci.org/iamdevonbutler/js-isequal)

Recursive deep equality checking for JS.

**engines: node >= 9.x**

## Installation
```
npm i --save js-isequal
```

## Comparable types
- String
- Number
- Boolean
- Array
- Object
- Null
- Undefined
- Date

## Example
```javascript
const isEqual = require('js-isequal');

isEqual('a', 'a'); // true
isEqual(1, 1); // true
isEqual(true, true); // true
isEqual({a: 1}, {a: 1}); // true
isEqual({a: 1, b: {c: 2}}, {a: 1, b: {c: 2}}); // true
isEqual({a: 1, b: [{c: 2}]}, {a: 1, b: [{c: 2}]}); // true
isEqual([1], [1]); // true
```

## License
MIT
