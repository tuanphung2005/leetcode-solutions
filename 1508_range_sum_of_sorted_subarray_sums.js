function rangeSumOfSortedSubarraySums(nums, n, left, right) {
    const mod = 1e9 + 7;
    let sums = [];
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            sums.push(sum);
        }
    }
    sums.sort((a, b) => a - b);
    let ans = 0;
    for (let i = left - 1; i < right; i++) {
        ans = (ans + sums[i]) % mod;
    }
    return ans;
}

console.log(rangeSumOfSortedSubarraySums([1, 2, 3, 4], 4, 1, 10)); // 50