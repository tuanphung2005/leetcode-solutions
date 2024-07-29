function countNumberOfTeams(rating) {
    let count = 0;
    const n = rating.length;

    for (let j = 0; j < n; j++) {
        let lessBefore = 0, greaterBefore = 0;
        let lessAfter = 0, greaterAfter = 0;

        for (let i = 0; i < j; i++) {
            if (rating[i] < rating[j]) lessBefore++;
            if (rating[i] > rating[j]) greaterBefore++;
        }

        for (let k = j + 1; k < n; k++) {
            if (rating[k] < rating[j]) lessAfter++;
            if (rating[k] > rating[j]) greaterAfter++;
        }

        count += lessBefore * greaterAfter + greaterBefore * lessAfter;
    }

    return count;
}

console.log(countNumberOfTeams([2, 5, 3, 4, 1])); // 3