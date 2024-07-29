function validPalindrome(s) {
    let cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(validPalindrome('A man, a plan, a canal: Panama')); // true
console.log(validPalindrome('race a car')); // false