/*
Create a countries array, check if there is a country or countries containing 
the word'and'. If there are countries containing 'and', print it as array. 
If there is no country containing the word 'and', 
print 'All these countries are without and'
*/

const countries = ["India", "America", "France", "Canada"];

let x = countries.filter((value) => value.includes('and'));
if(x.find((y) => y.includes('and'))) {
    console.log(x);
} else {
    console.log(countries);
}
