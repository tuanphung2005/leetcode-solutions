function numberOfSeniorCitizens(details) {
    let c = 0;
    for (let i = 0; i < details.length; i++) {
        if (Number(details[i].substring(11, 13)) > 60) {
            c++;
        }
    }
    return c;
}

console.log(numberOfSeniorCitizens(["1313579440F2036","2921522980M5644"]));