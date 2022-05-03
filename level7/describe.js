// Describe a list
// Return 'empty' if the list is empty, 'singleton' if it contains only 1 element,
// or 'longer' if it contains more

function describeList(x) {
    if (x.length === 0) {
        return 'empty';
    } else if (x.length === 1) {
        return 'singleton';
    } else {
        return 'longer';
    }
}