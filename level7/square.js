// Square every digit

function squareDigits(num){
  num = Array.from(String(num), Number);
  let ints = num.map(int => Math.pow(int, 2))
  return Number(ints.join(''))
}