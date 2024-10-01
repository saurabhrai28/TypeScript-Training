"use strict";
//type AddFn = (a:number, b:number) => number;
let add3;
add3 = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 27;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!');
        }
    }
}
let user1;
// user1 = { //objectes are seperated by comma 
//     name: 'Saurabh',
//     age: 27,
//     greet(phrase:string){
//         console.log(phrase + ' ' + this.name);
//     }
// };
user1 = new Person();
//user1.name = 'Ankita'
user1.greet('Hi There - I am');
console.log(user1);
