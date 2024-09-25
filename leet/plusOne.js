const plusOne = (digits) => {
  const result = [];
  const x = BigInt(digits.join(''));
  const y = BigInt(x) + BigInt(1);
  const target = y.toString().split('');
  
  for(let i = 0; i < target.length; i++) {
    result.push(Number(target[i]));
  }
  
  console.log(result);
}

plusOne([1,2,3]); 
plusOne([9]); 
plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]); // BigInt