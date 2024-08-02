function minSwaps(nums) {
    let ones = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) ones++;
    }

    // Extend the array to handle the circular nature
    let extendedNums = nums.concat(nums);

    let window = 0;
    for (let i = 0; i < ones; i++) {
        if (extendedNums[i] === 0) window++;
    }

    let minSwaps = window;
    for (let i = ones; i < nums.length + ones; i++) {
        if (extendedNums[i] === 0) window++;
        if (extendedNums[i - ones] === 0) window--;
        minSwaps = Math.min(minSwaps, window);
    }

    return minSwaps;
}

console.log(minSwaps([1, 1, 0, 0, 1])); // Output should be 0