const shoppingCart = [
  { product: "Shoes", price: 80, quantity: 1 },
  { product: "Bag", price: 120, quantity: 2 },
  { product: "Watch", price: 250, quantity: 4 },
];

//I Want to calculate Total price of the Cart

// using forEach method
let value = 0;
shoppingCart.forEach((product) => {
  value += product.price;
});
console.log(value);

//using reduce method
const initialVal = 0;
const result = shoppingCart.reduce((accumulator, curVal) => {
  console.log(accumulator);
  return accumulator + curVal.price;
}, initialVal);

console.log(result);


