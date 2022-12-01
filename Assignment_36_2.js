/*
Use for loop to iterate from 0 to 100 and print the sum of all evens 
and the sum of all odds. Print sum of evens and sum of odds as array
*/

let sumOfOdd = [];
let sumOfEven = [];

for(let i = 0; i <= 100; i++) {
    if(i % 2) {
        sumOfOdd.push(i);
    } else {
        sumOfEven.push(i);
    }
}
console.log();
console.log(sumOfOdd);
console.log(sumOfEven);
console.log();

let x = sumOfOdd.reduce((firstValue, secondValue) => firstValue + secondValue);
console.log("Sum of odd number is:",x);

let y = sumOfEven.reduce((firstValue, secondValue) => firstValue + secondValue);
console.log("Sum of odd number is:",y);
