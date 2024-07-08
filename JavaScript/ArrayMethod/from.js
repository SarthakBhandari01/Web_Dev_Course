/*
// factorial using reduce method
function fact() {
  return [1, 2, 3, 4, 5].reduce((acc, curValue) => {
    return acc * curValue;
  }, 1);
}
*/

// Factorial using from  and reduce function
function factorial(num) {
  return Array.from({ length: num }, (_, i) => {
    return i + 1;
  }).reduce((acc, curVal) => {
    return acc * curVal;
  }, 1);
}


console.log(factorial(5));
