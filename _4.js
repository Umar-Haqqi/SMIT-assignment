console.log("Question 4");

const calculatePercentage = (a,b,c) => {
    return ((a+b+c)/300)*100;
}

const calculateAverage = (a,b,c) => {
    return (a+b+c)/3;
}

function mainFunc(a,b,c) {
    const percentage = calculatePercentage(a,b,c)
    const average = calculateAverage(a,b,c)
    return {
        percentage: percentage,
        average: average
    }
}

const result = mainFunc(100, 75, 90);
console.log(result.percentage); 
console.log(result.average);   