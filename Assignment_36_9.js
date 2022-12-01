// Write a function which checks if all the items of the array are
// the same data type

let arr = [10, 20, 30, 40, 50];
let count = 0;

for (let x of arr) {
  if (Number.isInteger(x)) {
      count++;
  } else {
    count--;
  }
}


if(count == arr.length) {
    console.log("All items in array are the same data type");
} else {
    console.log("All items in array are not the same data type");
}
