// Check if any numbers in a list are less than any number before it
// Return true or false

var isMonotone = function(arr){
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }
    return true;
  }