function minimumDeletionsToMakeStringBalanced(s) {
    let countB = 0;
    let minDeletions = 0;

    for (let char of s) {
        if (char === 'b') {
            countB++;
        } else {
            minDeletions = Math.min(minDeletions + 1, countB);
        }
    }

    return minDeletions;
}

// Example usage:
console.log(minimumDeletionsToMakeStringBalanced('aababbab')); // Output: 2
console.log(minimumDeletionsToMakeStringBalanced('bbaaaaabb')); // Output: 2