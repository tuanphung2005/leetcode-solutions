
function validAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sCount = {};
    let tCount = {};

    for (let i = 0; i < s.length; i++) {
        sCount[s[i]] = (sCount[s[i]] || 0) + 1;
        tCount[t[i]] = (tCount[t[i]] || 0) + 1;
    }

    for (let key in sCount) {
        if (sCount[key] !== tCount[key]) {
            return false;
        }
    }

    return true;
};

console.log(validAnagram('anagram', 'nagaram')); 