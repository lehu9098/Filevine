const numbers = [5, 12, 8, 130, 44];

//Find finds the first element that meets the reuirements
const found = numbers.find(element => element > 10);
//filter returns an array with all of the elements that meet a certain requirement.
const result = numbers.filter(n => n > 6);
//find index returns the first index of the element that meets the requirements
const index = numbers.findIndex(n => n == 8)
//Slice returns a "slice" of the array can use -n for setting it the oppisite way
const sliceSection = numbers.slice(2, 4);
//Splice
const spliceReplace = numbers.splice(3, 0, 99);
console.log(numbers);
const spliceInsert = numbers.splice(3, 1, 100);
console.log(numbers);

//map The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const map1 = numbers.map(x => x * 2);

let stringArray = ['Blue', 'Humpback', 'Beluga'];

stringArray.sort();

console.log(found);
console.log(result);
console.log(index);
console.log(sliceSection);
console.log(stringArray);
