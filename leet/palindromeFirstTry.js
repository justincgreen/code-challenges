const isPalindrome = (x) => {
  const nums = x.toString();
  const map = new Map();
  const arr = [];
  
  if(nums.length === 1) {
    console.log(true);
    return;
  }
  
  for(let i = 0; i < nums.length; i++) {
    // console.log(nums[i], i);
    arr.push(nums[i]);
  }
  
  if(arr[0] === arr[2]) {
    console.log(true)
  }else {
    console.log(false);
  }
}

isPalindrome(3);