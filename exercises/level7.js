// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number
//
// Name the function "finalFunction"

function finalFunction(num) {
    let arr = [];
    const string = "hi";
    let x;
    for (x = 0; x < num; x++) {
        arr.push(string);
    }
    return arr;
}