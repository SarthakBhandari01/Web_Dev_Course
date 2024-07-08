const products = [
  { name: "aiphone", value: 1000 },
  { name: "macbook", value: 2000 },
  { name: "airpods", value: 200 },
];

//sum of the value of objects whose name property starts with the letter
//'a'  or 'A'
const res = products
  .filter((product) => {
    return product.name[0] === "a" || product.name[0] === "A";
  })
  .reduce((acc, product) => {
    return product.value + acc;
  }, 0);
console.log(res);
