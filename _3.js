console.log("Question 3");

function areaOfTriangle(a, b, c) {
    let S = (a + b + c) / 2
    let area = S * (S - a) * (S - b) * (S - c)
    return area
}

function calculate(val1, val2, val3) {
    return areaOfTriangle(val1, val2, val3)
}

console.log(calculate(3, 4, 5))