"use strict";
var _a;
const e1 = {
    name: 'Saurabh',
    privileges: ['Create-Server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { //type guard
        return a.toString() + b.toString(); //concatenate both the strings
    }
    return a + b;
}
const result = add('Saurabh', 'Anki');
result.split(' ');
const fetchedUserData = {
    id: 'u1',
    name: 'Saurabh',
    job: { title: 'Tester', description: 'Software Tester' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title); //optional chaining to access nested properties and nested objects in our data
const userInput = ''; //nullish coalescing
//const storedData = userInput || 'DEFAULT';
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
// type unknownEmployee = Employee | Admin;
// function printEMployeeInformation(emp: unknownEmployee){
//     console.log('Name: ' + emp.name)
//     if('privileges' in emp){
//         console.log('Privileges: ' + emp.privileges);
//     }
//     if('startDate' in emp){
//         console.log('StartDate: ' + emp.startDate);
//     }
// }
// printEMployeeInformation(e1);
// printEMployeeInformation({name: 'Ankita', startDate: new Date()});
// class Car{
//     drive(){
//         console.log('Driving...')
//     }
// }
// class Truck{
//     drive(){
//         console.log('Driving a truck...')
//     }
//     loadCargo(amount: number){
//         console.log('Loading Cargo...' + amount);
//     }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle){
//     vehicle.drive();
//     // if('loadCargo' in vehicle){
//     if(vehicle instanceof Truck){
//         vehicle.loadCargo(1000);
//     }
// }
// useVehicle(v1);
// useVehicle(v2);
// interface Bird{
//     type: 'bird';
//     flyingSpeed: number;
// }
// interface Horse{
//     type: 'horse';
//     runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal){
//     let speed;
//     switch(animal.type){
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed
//     }
//     console.log('Moving at speed:' + speed);
// }
// moveAnimal({type: 'bird', flyingSpeed: 100});
// moveAnimal({type: 'horse', runningSpeed: 90});
// // const UserInputElement = <HTMLInputElement>document.getElementById('user-input')!;  //can user either of the syntaxes!
// // const UserInputElement = document.getElementById('user-input')! as HTMLInputElement;
// const UserInputElement = document.getElementById('user-input');
// if(UserInputElement){
//     (UserInputElement as HTMLInputElement).value = 'Hi there!'; //Alternative to use "!" mark
// }
// interface ErrorContainer{  //{email: 'Not a valid email', username:'Must start with a character'}
//     [prop: string]: string; //index properties
// }
// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!',
//     username:'Must start with a character'
// }
