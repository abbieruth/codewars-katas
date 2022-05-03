// Search an array of strings for the query string
// Return each string in the array that contains the query string
// If the string isn't contained in any of the strings in the array, 
// the method returns an array containing a single string, "Empty"

function wordSearch(query, seq){
    //your code here
    let found = [];
    seq.forEach(word => {
      if (word.toLowerCase().includes(query.toLowerCase())) {
        found.push(word)
      }
    })
    if (found.length > 0) {
      return found;
    } else {
      found = ['Empty'];
      return found;
    }
  }