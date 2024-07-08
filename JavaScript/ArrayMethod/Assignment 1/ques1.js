// basic implementation
/*
function customMap(arr, cb) {
  const res = new Array();
  for (let i = 0; i < arr.length; i++) {
    res.push(cb(arr[i], i));
  }
  return res;
}
*/

// better implementation

Array.prototype.customMap = function (cb) {
  let res = new Array();
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }
  return res;
};

const arr = [1, 2, 3];
console.log(
  arr.customMap((e) => {
    return e * e;
  })
);

console.log();
