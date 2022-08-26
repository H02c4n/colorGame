//"use strict";

const a = ["dog", "cat", "fish"];

a[44] = "horse";

for (let i = 0; i < a.length; i++) {
  const element = a[i];
  console.log(element);
}

const addTax = function (total) {
  return total * 1.05;
};

console.log(addTax(50));

let example = 3;

// false Boolean
console.log(
  Boolean(0),
  Boolean(""),
  Boolean(NaN),
  Boolean("false"),
  Boolean("example")
);

// keyword

this;

const array = Array("first", "second", "third");

function name(params) {}

try {
} catch (error) {}
