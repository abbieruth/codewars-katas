// Square every digit

function squareDigits(num){
  return Number(('' + num).split('').map(function (i) {
    return Math.pow(i, 2)
  }).join(''))
}