/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSum = (nums, target) => {
  // create a new instance of a hashmap
  const map = new Map();
  
  // Create our hashmap
  for(let i = 0; i < nums.length; i++) {
    // Add number and iteration count to hashmap
    map.set(nums[i], i);
  }
  
  // Compare values in the hashmap to see if they equal the target
  for(let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i]; // why do we do this?, this subtracts the target from the number value in the nums array
    // console.log(compliment);
    
    if(map.has(compliment) && map.get(compliment) !== i) {
      console.log([i, map.get(compliment)]);
      // return [i, map.get(compliment)];
    }
  }
  
  // console.log(map);
  
  // return an empty array if no values in the hashmap equal the target
  // return [];
}

// Test Case 1
// twoSum([2,7,11,15], 9);

// Test Case 2
twoSum([3,2,4], 6);