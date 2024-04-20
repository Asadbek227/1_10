const arr = Array.from({ length: 100 }, (_, i) => i + 1);

const arr1 = arr.reduce((acc, curr) => {
  acc[curr] = curr;
  return acc;
}, {});

console.log(arr1);