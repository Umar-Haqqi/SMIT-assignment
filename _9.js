console.log("Question 9");

function overTimeCalculator(hours){
    if(hours > 40){
        return (hours - 40) * 12;
    }

    if(hours <= 40){
        return `No overtime`;
    }
}

console.log(overTimeCalculator(44));