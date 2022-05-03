// Return the only unique number from an unsorted array of pairs

function findUnique(numbers) {
    // Return the unique number
  // Sort it and remove all number pairs, I guess
  numbers = numbers.sort();
  let pairs = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[i + 1]) {
      pairs.push(numbers[i], numbers[i + 1]);
      i++;
    } else {
      return numbers[i]
    }
  }
}
