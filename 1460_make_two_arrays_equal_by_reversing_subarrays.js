function makeTwoArraysEqualByReversingSubarrays(target, arr) {
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);
    return target.length === arr.length && target.every((value, index) => value === arr[index]);
}

console.log(makeTwoArraysEqualByReversingSubarrays([1, 23, 4], [12, 3, 4])); // false