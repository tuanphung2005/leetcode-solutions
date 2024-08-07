function integerToEnglishWord(num) {
    if (num === 0) return 'Zero';
    let result = '';
    let i = 0;
    while (num > 0) {
        if (num % 1000 !== 0) {
        result = helper(num % 1000) + THOUSANDS[i] + ' ' + result;
        }
        num = Math.floor(num / 1000);
        i++;
    }
    return result.trim();
}

function helper(num) {
    if (num === 0) return '';
    else if (num < 20) return LESS_THAN_TWENTY[num] + ' ';
    else if (num < 100) return TENS[Math.floor(num / 10)] + ' ' + helper(num % 10);
    else return LESS_THAN_TWENTY[Math.floor(num / 100)] + ' Hundred ' + helper(num % 100);
}

const LESS_THAN_TWENTY = [
    '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
    'Seventeen', 'Eighteen', 'Nineteen'
    ];

const TENS = [
    '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];

const THOUSANDS = ['', 'Thousand', 'Million', 'Billion'];

console.log(integerToEnglishWord(1234567)); 