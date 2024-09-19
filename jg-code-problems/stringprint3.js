// * CHALLENGE *
// Print every character of a string from a dynamic argument
//-------------------------------------

// Function expression
const printNameChars = (name) => {
  if(name === undefined) {
    console.log('Enter a name');
    return;
  }
  
  // Loop through every letter in string
  for(i = 0; i < name.length; i++) {
    console.log(i, name[i]);
  }
}

printNameChars('tina');