// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number
// Return the array
// Name the function "finalFunction"


//let number = 8;

function finalFunction(number){
    let myArray = [];
    while (myArray.length < number){
        myArray.push("string");
    }
    return myArray;
}
//finalFunction(number);