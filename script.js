function secondHighest(arr) {
  if (arr.length < 2 || new Set(arr).size === 1) {
    return -Infinity;
  }

  let firstMax = Math.max(...arr);
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num < firstMax && num > secondMax) {
      secondMax = num;
    }
  }

  return secondMax;
}

// Udaaharan
console.log(secondHighest([5, 1, 2, 3, 4])); // Output: 4
console.log(secondHighest([-1, -2, -3, -4, -5])); // Output: -2
console.log(secondHighest([])); // Output: -Infinity
console.log(secondHighest([1])); // Output: -Infinity
console.log(secondHighest([1, 1, 1, 1, 1])); // Output: -Infinity

