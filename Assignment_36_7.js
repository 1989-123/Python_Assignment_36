/*
Write a function called sumOfArrayItems, it takes an array parameter and return 
the sum of all the items. Check if all the array items are number types. 
If not give return reasonable feedback.
*/

let arr = [10, 20, 30, 40, 'ht', 50];

function sumOfArrayItems(...element) {
    let sum = 0;
    for (let x of element) {
            if(Number.isInteger(x)) {
                sum = sum + x;
            } else {
               return console.log("Not addble");
            }
        }
        return sum;
    }

let x = sumOfArrayItems(...arr);
console.log(x);
