
let arr = [1, 2, 3, 4, 5, 6, 7, 0, null];

console.log(arr);
console.log(typeof arr);

function getElemQuantity() {
let evenQuantity = 0;
let oddQuantity = 0;
let nullQuantity = 0;
let zeroQuantity = 0;

for (let i = 0; i < arr.length; ++i) {
    if ((arr[i] % 2 === 0) && (arr[i] !== null) && (arr[i] !== 0)) {
        evenQuantity++;
    } else if ((arr[i] % 2 !==0) && (arr[i] !== null)) {
        oddQuantity++;
    } else if (arr[i] === null) {
        nullQuantity++;
    } else if (arr[i] === 0) {
        zeroQuantity++;
    }
}
console.log(`evenQuantity - ${evenQuantity}`);
console.log(`oddQuantity - ${oddQuantity}`);
console.log(`nullQuantity - ${nullQuantity}`);
console.log(`zeroQuantity - ${zeroQuantity}`);
}

getElemQuantity();