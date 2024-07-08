const arr = [1, 400, 5, 6, 9];

const result = arr.every((element) => {
  console.log(element);
  // true if every element fullfills the condition otherwise false
  return element < 100;
});
console.log(result); // false;
