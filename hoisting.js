// Works with function declarations: 

console.log(foo()); // - this function is hoisted from the very bottom 

console.log(calculateAge(1965));

function calculateAge(year) {
  return (2020 - year);
}

console.log(calculateAge(1990));

// But not with function expressions: 

// console.log(retirement(1990)); - this returns 'retirement is not a function'

var retirement = function(year) {
  return (65 - (2020 - year));
}

console.log(retirement(1990));

// Variables: 

console.log(age) // - this will return undefined 

var age = 23;

function foo() {
  var age = 65;
  return age;
};

console.log(foo()); // this will return 65,

console.log(age); // and this will return 23 because it's in the global execution context 