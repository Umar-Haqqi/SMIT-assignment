console.log("Question 10");


function findCurrencyDenominations(amount) {
    if (amount < 10) {
        return `Amount is too small to give denominations.`;
    }

    const hundredNotes = Math.floor(amount / 100);
    amount %= 100;

    const fiftyNotes = Math.floor(amount / 50);
    amount %= 50;

    const tenNotes = Math.floor(amount / 10);

    const result = [];

    if (hundredNotes > 0) {
        result.push(`${hundredNotes} hundred rupee note${hundredNotes > 1 ? 's' : ''}`);
    }

    if (fiftyNotes > 0) {
        result.push(`${fiftyNotes} fifty rupee note${fiftyNotes > 1 ? 's' : ''}`);
    }

    if (tenNotes > 0) {
        result.push(`${tenNotes} ten rupee note${tenNotes > 1 ? 's' : ''}`);
    }

    return result.join(", ");
}

const amount = 590;
const denominations = findCurrencyDenominations(amount);
console.log(`You have ${denominations}.`);