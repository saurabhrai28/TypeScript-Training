"use strict";
//****************************** Spread Operator ***************************/
// const add2 = (a:number, b:number = 1) => a + b;
// const printOP : (a: number | string) => void = output => console.log(output);
// const button1 = document.querySelector('button');
// if(button1){
//     button1.addEventListener('click', event => console.log(event));
// }
// printOP(add2(10));
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];
activeHobbies.push(...hobbies);
const person1 = {
    firstname: 'Saurabh',
    userage: 27
};
const copiedPerson = Object.assign({}, person1);
const add2 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add2(5, 10, 2, 3.7);
console.log(addedNumbers);
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstname: username, userage } = person1;
console.log(username, userage, person1);
