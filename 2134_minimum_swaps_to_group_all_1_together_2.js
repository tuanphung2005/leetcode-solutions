function minimumSwapsToGroupAll1Together(nums) {
    let ones = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) ones++;
    }
    
    let window = 0;
    for (let i = 0; i < ones; i++) {
        if (nums[i] === 0) window++;
    }
    
    let minSwaps = window;
    for (let i = ones; i < nums.length; i++) {
        if (nums[i] === 0) window++;
        if (nums[i - ones] === 0) window--;
        minSwaps = Math.min(minSwaps, window);
    }
    
    return minSwaps;
}
