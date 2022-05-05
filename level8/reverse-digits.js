// Convert number to reversed array of digits

function digitize(n) {
    return String(n).split('').map(num => Number(num)).reverse();
}