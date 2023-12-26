function secondHighest(arr) {
    if (arr.length < 2 || new Set(arr).size === 1) {
        return -Infinity;
    }

    // Find the maximum element
    const max = Math.max(...arr);

    // Find the index of the maximum element
    const maxIndex = arr.indexOf(max);

    // Remove the maximum element from the array
    arr.splice(maxIndex, 1);

    // Find the second maximum element
    const secondMax = Math.max(...arr);

    return secondMax;
}

// Examples
console.log(secondHighest([5, 1, 2, 3, 4]));   // Output: 4
console.log(secondHighest([-1, -2, -3, -4, -5]));  // Output: -2
console.log(secondHighest([]));   // Output: -Infinity
console.log(secondHighest([1]));   // Output: -Infinity
console.log(secondHighest([1, 1, 1, 1, 1]));   // Output: -Infinity
