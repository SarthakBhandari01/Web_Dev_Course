function createPromise() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //let change the state  of promise;
      const value = Math.random().toFixed(2);
      if (value < 0.5) {
        //resolve the promise
        res(value);
      } else {
        rej(value);
      }
    }, 5000);
  });
}
const response = createPromise();
response.then(
  function fullfillHandler(value) {
    console.log("1 promise fullfilled with value ", value);
  },
  function rejectionHandler(value) {
    console.log("1 promise rejected with value ", value);
  }
);
response.then(
    function fullfillHandler(value) {
      console.log("2 promise fullfilled with value ", value);
    },
    function rejectionHandler(value) {
      console.log("2 promise rejected with value ", value);
    }
  );
  
for(let i=0;i<1e10;i++){
    //blocking code
}
console.log("the end")