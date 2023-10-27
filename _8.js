console.log("Question 8");

let distanceInKM = 20

const distanceInInches = (distanceInKM) => `${distanceInKM} km is equal to ${distanceInKM * 39370.1} inches`
const distanceInMeters = (distanceInKM) => `${distanceInKM} km is equal to ${distanceInKM * 1000} meters`
const distanceInFeet = (distanceInKM) => `${distanceInKM} km is equal to ${distanceInKM * 3280.84} feet`
const distanceInCM = (distanceInKM) => `${distanceInKM} km is equal to ${distanceInKM * 100000} cm`

console.log(distanceInInches(distanceInKM))
console.log(distanceInMeters(distanceInKM))
console.log(distanceInFeet(distanceInKM))
console.log(distanceInCM(distanceInKM))