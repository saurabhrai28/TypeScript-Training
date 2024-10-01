"use strict";
// const names : Array<string> = [];
// //names[0].split(' ');
// const promise : Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });
// promise.then(data => {
//     //data.split(' ');
// })
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// console.log(merge({name:'Saurabh'}, {age:27}));
const mergedObj = merge({ name: 'Saurabh', hobbies: ['Sports'] }, { age: 27 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = 'Got no Value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hello there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([]));
//console.log(countAndDescribe(10)); Length is not assignable to Argument type number
function extractAndConvert(obj, key) {
    return 'value: ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Saurabh');
textStorage.addItem('Ankita');
textStorage.addItem('Rishank');
textStorage.removeItem('Rishank');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    // return {title: title, description: description, completeUntil: date};
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Saurabh', 'Ankita'];
// names.push('Rishank'); 
// names.pop();
