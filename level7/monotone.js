// Check if any numbers in a list are less than any number before it
// Return true or false

var isMonotone = function(arr){
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 1; j < arr.length; j++) {
                if (arr[j] < arr[i]) {
                    return false
                } else {
                    return true;
                }
            }
        }
    } else if (arr.length = 0) {
        return true;
    } else {
        return true;
    }
}