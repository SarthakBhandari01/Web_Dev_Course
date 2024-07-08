const arr = [1, 2, 3, 4, 5, 6];
const oddElements = arr.map((element) => {
  const xyz = element + 2;
  return; // not returning anything is equal to returning undefine.
});
console.log(oddElements); //new array
// [ undefined, undefined, undefined, undefined, undefined, undefined ]

