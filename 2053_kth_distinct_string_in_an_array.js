function kthDistincStringInAnArray(arr, k) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] + 1 || 1;
    }

    let count = 0;
    for (let key in map) {
        if (map[key] === 1) {
            count++;
        }
        if (count === k) {
            return key;
        }
    }
    return "";
}

console.log(kthDistincStringInAnArray(["a","b","a"], 3));