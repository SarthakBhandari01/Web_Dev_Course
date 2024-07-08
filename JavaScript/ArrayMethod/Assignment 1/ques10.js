//issue fixed
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index, arr) => {
  arr[index] = num * 2;
});
console.log(numbers);
