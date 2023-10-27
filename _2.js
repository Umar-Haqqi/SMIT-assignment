console.log("Question 2");

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
            return true;
        }
    }
    return false;
}

const yearToCheck = 2020;
if (isLeapYear(yearToCheck)) {
    console.log(yearToCheck + " is a leap year.");
} else {
    console.log(yearToCheck + " is not a leap year.");
}