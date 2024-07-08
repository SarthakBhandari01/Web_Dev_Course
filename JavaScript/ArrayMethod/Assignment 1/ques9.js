const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
const transformedArray = Array.from(arrayLike, (element) => {
    return element;
});
console.log(transformedArray); 
