// Filter a list of strings and return a list with only your friends' names in it
// If a name has exactly 4 letters in it, they are a friend
function friend(friends){
    let safe = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            safe.push(friends[i]);
        }
    }
    return safe;
}