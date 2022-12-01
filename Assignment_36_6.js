/*
Declare a function name capitalizeArray. It takes array as a parameter and 
it returns the - capitalizedarray.
*/

let arr = ['jayesh', 'hitesh', 'nilesh', 'paresh'];

function capitalizeArray(...value) {
     let z = arr.forEach((x) => console.log(x.toUpperCase()));
     return z;
}

capitalizeArray(...arr);
