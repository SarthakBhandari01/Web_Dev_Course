function createPromise() {
  return new Promise((res, rej) => {
    //resolve with value 10
    res(10);
  });
}
function blockingCode() {
  for (let i = 0; i < 1e10; i++) {
    // block
  }
}
const response = createPromise();
// we have fullfilled promise
blockingCode();
response.then(
  function fulfillHandler(value) {
    console.log(" promise filfilled with", value);
  },
  function rejectHandler(value) {
    console.log("promise rejected with", value);
  }
);

blockingCode();
