function createPromise() {
  return new Promise((res, rej) => {
    res("Sarthak");
  });
}
function blockingCode() {
  for (let i = 0; i < 1e10; i++) {
    //just blocking
  }
}
let a = 10;
setTimeout(() => {
  console.log("Timer 1 Done.. ");
  console.log("value of a is ", a);
}, 3000);
setTimeout(() => {
  console.log("Timer 2 Done.. ");
  console.log("value of a is ", a);
}, 0);

const pr = createPromise();
pr.then(
  function success(value) {
    a++;
    console.log("pr promise fullfilled with the value ", value);
  },
  function failure(value) {
    console.log("Pr promise rejected with the value ", value);
  }
);
a++;
blockingCode();
