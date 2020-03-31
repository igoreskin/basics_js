// The inner function has the access to the execution context of the outer function
// even after the outer function has returned: 

function retirement(retirementAge) {
  var a = ' years left until retirement.'
  return function (yearOfBirth) {
    var age = (2020 - yearOfBirth);
    return ((retirementAge - age) + a)
  }
}

var retirementUS =  retirement(66);
console.log(retirementUS(1990));

