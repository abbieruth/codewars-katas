/* Complete the function that accepts a string parameter, 
and reverses each word in the string.
ALL spaces in the string should be retained.*/

// Example: "This is an example!" ==> "sihT si na !elpmaxe"
// Example: "double  spaces" ==. "elbuod  secaps"

function reverseWords(str) {
    // convert sentence to array
    let sent = str.split(' ');
    // convert each word to array, reverse, convert back to string
    for (let i = 0; i < sent.length; i++) {
        sent[i] = sent[i].split('').reverse().join('');
    }
    // convert sentence back to string and return it
    return sent.join(' ');
}