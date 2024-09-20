// Sort the array
const arr = [9,8,7,5,1,3,2];

// console.log(arr.sort()); // .sort() mutates the array
// console.log(arr); // original array has now been mutated

console.log(arr.toSorted()); // .toSorted() creates a copy of the array 
console.log(arr); // original array has not been mutated