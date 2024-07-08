const arr = [2, 3, 1, 4, 5];

const result = arr.map((element) => {
//   console.log("Element is ", element);
  return element * element * element;
});
console.log(result); // this is new array
console.log(arr);// original array remain intact

const product = [
  { id: 1, name: "iphone", price: 1000 },
  { id: 2, name: "macbook", price: 2000 },
  { id: 3, name: "airpods", price: 200 },
];

const modifiedProduct = product.map((product, index) => {
  console.log(index);
  return { id: product.id, name: product.name };
});
console.log(modifiedProduct);
