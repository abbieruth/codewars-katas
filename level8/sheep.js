// In an array of sheep where 'true' equals present and 'false' equal absent,
// return the number of sheep that are present
function countSheeps(arrayOfSheep) {
    let present = 0;
    arrayOfSheep.forEach(count => {
        if (count === true) {
            present++;
        }
    });
    return present;
}