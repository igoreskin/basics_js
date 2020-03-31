// A simple callback example

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrResponse = [];
  for(var i = 0; i < arr.length; i++) {
    arrResponse.push(fn(arr[i]));
  }
  return arrResponse;
}

function calculateAge(el) {
  return 2020 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  return 206.9 - (0.67 * el);
}

var ages = arrayCalc(years, calculateAge);

console.log(arrayCalc(years, calculateAge));
console.log(arrayCalc(ages, isFullAge));
console.log(arrayCalc(ages, maxHeartRate));