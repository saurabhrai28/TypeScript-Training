"use strict";
// ********************************* Function Return Type and Void *************************** //
// function add(n1:number , n2:number){
//     return n1+n2;
// }
// function printResult(num:number): void{
//     console.log('Result:' +num);
//     //return;
// }
// // console.log(printResult(add(5,12))); //*** using retuen value of a function that doesnt retuen anything, we get undefined as value
// printResult(add(5,12));
// console.log("Hello There");
// ********************************* Function as Types *************************** //
// function add(n1:number , n2:number){
//     return n1+n2;
// }
// function printResult(num:number): void{
//     console.log('Result:' +num);
// }
// printResult(add(5,12));
// //let combineValues : Function;
// let combineValues : (a: number, b: number) => number;
// combineValues = add; //pointer to add function
// //combineValues = 5;
// //combineValues = printResult;
// console.log(combineValues(8,8));
// console.log("Hello There");
// ********************************* Function Types and Callbacks *************************** //
function addition(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result:' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(addition(5, 12));
//let combineValues : Function;
let combineValues;
combineValues = addition; //pointer to add function
//combineValues = 5;
//combineValues = printResult;
console.log(combineValues(8, 8));
addAndHandle(10, 30, (result) => {
    console.log(result);
});
console.log("Hello There");
