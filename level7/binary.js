// Ones and zeros

const binaryArrayToNumber = arr => {
  // your code
  return arr.reduce((acc, val) => {
    return (acc << 1) | val;
  })
};