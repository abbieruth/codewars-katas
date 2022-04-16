// Odd or even

function oddOrEven(array) {
    //enter code here
   return array.reduce((x, y) => x + y, 0) % 2 === 0 ? 'even' : 'odd';
 }