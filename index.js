// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) &&
    ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) &&
    !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
    (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Part 1: Math Problems
// Check if all numbers are divisible by 5. Cache the result in a variable.
let divisible_counter = 0;

if (n1 % 5 === 0) {
    divisible_counter++;
}

if (n2 % 5 === 0) {
    divisible_counter++;
}

if (n3 % 5 === 0) {
    divisible_counter++;
}

if (n4 % 5 === 0) {
    divisible_counter++;
}

console.log(`Of the 4 numbers, the amount divisble by 5 is ${divisible_counter}.`);

// Check if the first number is larger than the last. Cache the result in a variable.
let isFirstGreater = n1 > n4

if (isFirstGreater) {
    true;
} else {
    false;
}

console.log(`The first number is larger than the last: ${isFirstGreater}`);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
let x = n2 - n1;

console.log(x);

// Multiply the result by the third number.
let y = x * n3;

console.log(y);

// Find the remainder of dividing the result by the fourth number.
let remainder = y % n4;

console.log(`The remainder of the arithmetic chain is ${remainder}.`);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator 
// (!) in other logic comparisons. Rename the variable as appropriate.
const isOver25 = (n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25);
console.log(`All numbers are over 25: ${isOver25}`);



// Part 2: Practical Math
// The distance of the trip, in total, is 1,500 miles.
const trip_distance = 1500;

// At 55 miles per hour, you get 30 miles per gallon.
let slowSpeed = 55;
let slowGallon = 30;

// At 60 miles per hour, you get 28 miles per gallon.
let avgSpeed = 60;
let avgGallon = 28;

// At 75 miles per hour, you get 23 miles per gallon.
let fastSpeed = 75;
let fastGallon = 23;

// You have a fuel budget of $175.
const fuel_budget = 175;

// The average cost of fuel is $3 per gallon.
const fuel_cost = 3;

// How many gallons of fuel will you need for the entire trip?
// Calculate the number of gallons of fuel needed for each speed
let slowGallonNeed = Math.ceil(trip_distance / slowGallon);
let avgGallonNeed = Math.ceil(trip_distance / avgGallon);
let fastGallonNeed = Math.ceil(trip_distance / fastGallon);

console.log(`If travelling at ${slowSpeed} miles per hour, you will need ${slowGallonNeed} gallons of fuel to complete the trip.`);
console.log(`If travelling at ${avgSpeed} miles per hour, you will need ${avgGallonNeed} gallons of fuel to complete the trip.`);
console.log(`If travelling at ${fastSpeed} miles per hour, you will need ${fastGallonNeed} gallons of fuel to complete the trip.`);

// Will your budget be enough to cover the fuel expense?
// slowCost is the price of fuel at 55 miles per hour
let slowCost = slowGallonNeed * fuel_cost;
let slowDifference = slowCost <= fuel_budget;

if (slowDifference) {
    true;
} else {
    false;
}

console.log(`For ${slowGallonNeed} gallons of fuel, you'll need $${slowCost}.`)
console.log(`Your budget of $${fuel_budget} is enough to cover the $${slowCost} cost: ${slowDifference}`)

// avgCost is the price of fuel at 60 miles per hour
let avgCost = avgGallonNeed * fuel_cost;
let avgDifference = avgCost <= fuel_budget;

if (avgDifference) {
    true;
} else {
    false;
}

console.log(`For ${avgGallonNeed} gallons of fuel, you'll need $${avgCost}.`)
console.log(`Your budget of $${fuel_budget} is enough to cover the $${avgCost} cost: ${avgDifference}`)

// fastCost is the price of fuel at 75 miles per hour
let fastCost = fastGallonNeed * fuel_cost;
let fastDifference = fastCost <= fuel_budget;

if (fastDifference) {
    true;
} else {
    false;
}

console.log(`For ${fastGallonNeed} gallons of fuel, you'll need $${fastCost}.`)
console.log(`Your budget of $${fuel_budget} is enough to cover the $${fastCost} cost: ${fastDifference}`)

// How long will the trip take, in hours?
let slowHourTotal = Math.ceil((trip_distance / slowSpeed) * 10) / 10;
console.log(`At ${slowSpeed} miles per hour, it would take ${slowHourTotal} hours to complete the trip.`);

let avgHourTotal = Math.ceil((trip_distance / avgSpeed) * 10) / 10;
console.log(`At ${avgSpeed} miles per hour, it would take ${avgHourTotal} hours to complete the trip.`);

let fastHourTotal = Math.ceil((trip_distance / fastSpeed) * 10) / 10;
console.log(`At ${fastSpeed} miles per hour, it would take ${fastHourTotal} hours to complete the trip.`);

// Compare the results when traveling at an average of 55, 60, and 75 miles 
// per hour. Which makes the most sense for the trip?
let fastestTrip = Math.min(slowHourTotal, avgHourTotal, fastHourTotal);
console.log(`The fastest trip time is ${fastestTrip} hours, which makes the most sense to save time.`)

let cheapestTrip = Math.min(slowCost, avgCost, fastCost);
console.log(`The cheapest trip cost is $${cheapestTrip}, which makes the most sense to save money.`)