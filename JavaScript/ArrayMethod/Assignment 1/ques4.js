// sum of square using reduce
function SumOfSquare(arr) {
  return arr.reduce((acc, preVal) => {
    return acc+preVal*preVal;
  }, 0);
}

const arr = [1, 2, 3];
console.log(SumOfSquare(arr));