/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  
  You can return the answer in any order.
*/

const twoSum = (nums, target) => {
  const map = new Map();
  for(let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  
  // Do checks
  for(let i= 0; i < nums.length; i++) {
    const compliment = target - nums[i]; // equation
    
    if(map.has(compliment) && map.get(compliment) !== i) {
      console.log([map.get(compliment), i]);
    }
  }
  
  // if no pairs found
  console.log([]);
}

twoSum([2,7,11,15], 9);
twoSum([3,2,4], 6);
twoSum([3,3], 6);
//twoSum([3,3], 7); // no match found here