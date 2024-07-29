function twoSum(nums, target) {
 
    const numWithIndex = nums.map((num, index) => [num, index]);

    numWithIndex.sort((a, b) => a[0] - b[0]);
    
    let left = 0;
    let right = numWithIndex.length - 1;
    
    while (left < right) {
        const sum = numWithIndex[left][0] + numWithIndex[right][0];
        if (sum === target) {
            return [numWithIndex[left][1], numWithIndex[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

console.log(twoSum([3, 3], 6));