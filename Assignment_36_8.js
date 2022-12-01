/*
Write a function called modifyArray takes array as parameter and modifies 
the fifth item of the array and return the array. If the array length is less 
than five it return 'item,not found'.
*/

let arr = [10, 20, 30, 40, 50];

function modifyArray(...arg) {
    if(arg.length < 5) {
        console.log("Item, not found");
    } else {
         arg.splice(4, 1, 23)
         console.log(arg);
    }
}

modifyArray(...arr);
