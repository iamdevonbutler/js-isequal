const isEqual = require('../lib');

const should = require('chai').should();
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('js-isequal', () => {
  it ('should compare "strings"', () => {
    expect(isEqual('a', 'a')).to.be.true;
    expect(isEqual('a', 'b')).to.be.false;
  });
  it ('should compare "numbers"', () => {
    expect(isEqual(1, 1)).to.be.true;
    expect(isEqual(1, 2)).to.be.false;
  });
  it ('should compare "booleans"', () => {
    expect(isEqual(true, true)).to.be.true;
    expect(isEqual(true, false)).to.be.false;
  });
  it ('should compare "arrays"', () => {
    expect(isEqual([], [])).to.be.true;
    expect(isEqual([1], [1])).to.be.true;
    expect(isEqual([1, 2], [1, 2])).to.be.true;
    expect(isEqual([1, [1]], [1, [1]])).to.be.true;
    expect(isEqual([{a: 1}, {a: 1}], [{a: 1}, {a: 1}])).to.be.true;
    expect(isEqual([{a: 1, b: {c: 2}}, {a: 1, b: {c: 2}}], [{a: 1, b: {c: 2}}, {a: 1, b: {c: 2}}])).to.be.true;
    expect(isEqual([{a: [1]}, {a: [1]}], [{a: [1]}, {a: [1]}])).to.be.true;
  });
  it ('should compare "objects"', () => {
    expect(isEqual({}, {})).to.be.true;
    expect(isEqual({a: 1}, {a: 1})).to.be.true;
    expect(isEqual({a: [1]}, {a: [1]})).to.be.true;
    expect(isEqual({a: {b: 1}}, {a: {b: 1}})).to.be.true;
    expect(isEqual({a: {b: [1, 2, {c: 1, d: {e: 1}}]}}, {a: {b: [1, 2, {c: 1, d: {e: 1}}]}})).to.be.true;
    expect(isEqual({a: 1}, {a: 2})).to.be.false;
    expect(isEqual({a: [1]}, {a: [2]})).to.be.false;
    expect(isEqual({a: {b: 1}}, {a: {b: 2}})).to.be.false;
    expect(isEqual({a: {b: [1, 2, {c: 1, d: {e: 1}}]}}, {a: {b: [1, 2, {c: 1, d: {e: 2}}]}})).to.be.false;
  });
  it ('should compare "null"', () => {
    expect(isEqual(null, null)).to.be.true;
    expect(isEqual(null, false)).to.be.false;
  });
  it ('should compare "undefined"', () => {
    expect(isEqual(undefined, undefined)).to.be.true;
    expect(isEqual(undefined, false)).to.be.false;
  });
  it ('should compare "dates"', () => {
    var date = new Date();
    expect(isEqual(date, date)).to.be.true;
    expect(isEqual(date, new Date(1519534800))).to.be.false;
  });
  it ('should NOT compare "functions"', () => {
    expect(isEqual(() => {}, () => {})).to.be.false;
  });
  it ('should compare multiple (> 2) values', () => {
    expect(isEqual('a', 'a', 'a')).to.be.true;
    expect(isEqual({a: 1}, {a: 1}, {a: 1})).to.be.true;
    expect(isEqual([1,2], [1,2], [1,2], [1,2])).to.be.true;
    expect(isEqual('a', 'a', 'b')).to.be.false;
    expect(isEqual({a: 1}, {a: 2}, {a: 1})).to.be.false;
    expect(isEqual([1,2], [1,2,3], [1,2], [1,2])).to.be.false;
  });
  it ('should return "false" given a single param', () => {
    expect(isEqual('a')).to.be.false;
  });
  it ('should return false given no params', () => {
    expect(isEqual()).to.be.false;
  });
});
