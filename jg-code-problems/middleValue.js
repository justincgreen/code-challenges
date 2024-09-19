// * CHALLENGE * 
// Get the middle value of the array and print it to the console 
// --------------------------------------------------------------

// Known array length - static version
const arr = [1,2,3];
const middle = arr[1];

// console.log(middle);

// Unknown array length - dynamic version
const arrTwo = [1,2,3,4,5];
const middleIndex = Math.floor(arrTwo.length / 2);
const middleValue = arrTwo[middleIndex];

console.log(middleValue);