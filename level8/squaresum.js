// This function should square each number passed into it and then sum the results together
// [1, 2, 2] should return 9; (1^2 + 2^2 + 2^2 = 9)
function squareSum(numbers){
    // Create empty results array
    let results = []
    // Create starter sum
    let sum = 0
    // Square each number in the numbers array and push the result to the results array
    numbers.forEach(num => results.push(Math.pow(num, 2)))
    // Loop through results, add all the numbers together, and save them to sum
    for (let i = 0; i < results.length; i++) {
        sum += results[i]
    }
    // Return the sum of all the squared numbers
    return sum
}