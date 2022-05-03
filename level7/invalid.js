// Invalid Input - Error Handling #1
// Take a string as input and return an object containing the properties 'vowels' and 'consonants'
// 'Vowels' must contain the total count of vowels {a,e,i,o,u}
// Consonants must contain the total value of consonants
// Handle invalid input, return valid input

function getCount(words) {
    let count = {
        vowels: 0,
        consonants: 0
    };
    const five = ['a','e','i','o','u']
    const twentyOne = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
    if (typeof words === 'string') {
        text = Array.from(words.toLowerCase());
        text.forEach(char => {
            for (let i = 0; i < five.length; i++) {
                if (five[i] === char) {
                    count.vowels += 1;
                }
            }
            for (let j = 0; j < twentyOne.length; j++) {
                if (twentyOne[j] === char) {
                    count.consonants += 1;
                }
            }
        })
    }
    return count
  }