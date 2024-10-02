"use strict";
//*********************** Arrow Function *****************/
const users = 'Saurabh';
let age1 = 30;
age1 = 29;
// function addNum1(a: number, b:number){
//     let results;
//     results = a + b;
//     return results;
// }
// if(age > 20){
//     let isOld = true;
// }
// console.log(isOld);
const addNum1 = (a, b) => {
    return a + b;
};
console.log(addNum1(2, 5));
const printOutput = output => console.log(output);
const button1 = document.querySelector('button');
if (button1) {
    button1.addEventListener('Click', event => console.log(event));
}
printOutput(addNum1(65, 35));
