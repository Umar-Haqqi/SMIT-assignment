console.log("Question 7");

function VowelOcc(sentence) {
    const successionVowels = sentence.match(/([aeiouAEIOU]){2,}/g);
    if (successionVowels) {
        return successionVowels;
    }
    else {
        return `No successive vowels found`
    }
}
console.log(VowelOcc("helloo, my name is Umar Haqqui"));