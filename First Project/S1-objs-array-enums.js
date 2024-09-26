"use strict";
// const user:{
//     name: string;
//     age: number
// } = {
/************************** Array object type **************************/
//     const person = {
//     name: 'Saurabh',
//     age : 28,
//     hobbies: ['Sports', 'Cooking']
// };
// let favactivity: string[];
// favactivity = ['Sports'];
// console.log(person.name);
// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase())
// } 
/************************** Nested object type **************************/
// const product = {
//     id: 'abc1',
//     price: 12.99,
//     tags: ['great-offer', 'hot-and-new'],
//     details: {
//       title: 'Red Carpet',
//       description: 'A great carpet - almost brand-new!'
//     }
//   }
//   console.log(product)
/**** Tuples object type ****/
// const person = {
//     name: 'Saurabh',
//     age : 28,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2 , 'Author']
// };
// let favactivity: string[];
// favactivity = ['Sports'];
// console.log(person.name);
// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase())
// } 
/************************** Enum object type **************************/
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Saurabh',
    age: 28,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
let favactivity;
favactivity = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is Author');
}
else {
    console.log('is ADMIN');
}
