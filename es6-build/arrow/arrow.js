"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = test;
[1, 2, 3, 4].forEach(function (v) {
  console.log(v + 1);
});

console.log([1, 2, 3].map(function (v) {
  return v / 2;
}));

var arrow = "arrow";
exports.arrow = arrow;

function test() {
  return "test";
}