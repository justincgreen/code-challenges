const isPalindrome = (x) => {
  const num = x.toString();
  const reversed = num.split('').reverse().join('');
    
  if(num === reversed) {
    console.log(true);
  }else {
    console.log(false);
  }
  
}

isPalindrome(121);