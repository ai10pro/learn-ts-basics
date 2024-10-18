export{};

const numArr: number[] = [1, 2, 3, 4, 5, 6];
const oddArr: number[] = numArr.filter(num => num % 2 !== 0);

console.log(numArr); // [1, 2, 3, 4, 5, 6]
console.log(oddArr); // [1, 3, 5]