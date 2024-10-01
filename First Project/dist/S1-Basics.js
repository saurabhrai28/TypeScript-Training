"use strict";
function addition1(n1, n2, showResult, phrase) {
    // if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new console.error('Incorrect Input');
    // }
    const results = n1 + n2;
    if (showResult) {
        console.log(phrase + results);
    }
    else {
        return results;
    }
}
const number1 = 89;
const number2 = 3.8;
const displayResult = true;
const resultStatement = "Result is: ";
const results = addition1(number1, number2, displayResult, resultStatement);
console.log("Your code goes here...Hello world!!");
