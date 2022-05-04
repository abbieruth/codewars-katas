// Fruit string calculator
// Given a string of words and numbers, extract the expression including:
// 1. the operator: either addition or subtraction
// 2. the two numbers that we are operating on
// Return the result of the calculation
// 'loses' and 'gains' are the only two words describing operators
// Examples:
// 'Panda has 48 apples and loses 4' returns 44
// 'Jerry has 34 apples and gains 6' returns 40

function calculate(string) {
    // Arrays are easier to work with
    let array = string.split(' ')
    // The first number is always at index 2 (counting from 0)
    let number1 = array[2]
    // The second number is always at index 6 (counting from 0)
    let number2 = array[6]
    // Logic for deciding if we should add or subtract
    if (array.includes('loses')) {
        return Number(number1) - Number(number2);
    } else {
        return Number(number1) + Number(number2);
    }
}