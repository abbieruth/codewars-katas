// Scoring tests
//Paramters:
// An array of 0s, 1s, and 2s where 0 is a correct answer, 1 is an omitted answer, and 2 is incorrect
// Number of points awarded for correct answers
// Number of point awarded for omitted answers (may be negative)
// Number of point deducted for incorrect answers

function scoreTest(str, right, omit, wrong) {
    //insert code here
    arr = Array.from(str);
    let yes = 0;
    let no = 0;
    let skip = 0;
    arr.forEach(answer => {
        if (answer === 0) {
            yes += 1;
        } else if (answer === 1) {
            skip += 1
        } else {
            no += 1;
        }
    })
    let score = yes * right;
    score += skip * omit;
    score -= no * wrong;
    return score;
}