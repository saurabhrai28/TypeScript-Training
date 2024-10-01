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

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// console.log(merge({name:'Saurabh'}, {age:27}));

const mergedObj = merge({name:'Saurabh', hobbies: ['Sports']}, {age:27})
console.log(mergedObj);

interface Lengthy{
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no Value.'
    if(element.length === 1){
        descriptionText = 'Got 1 element.'
    } else if(element.length > 1){
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hello there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([ ]));
//console.log(countAndDescribe(10)); Length is not assignable to Argument type number

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return 'value: ' + obj[key];
}
extractAndConvert({name: 'Max'}, 'name');

class DataStorage <T extends string | number | boolean> {
    private data: T[]  = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item:T){
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('Saurabh');
textStorage.addItem('Ankita');
textStorage.addItem('Rishank');
textStorage.removeItem('Rishank');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Saurabh'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Ankita'});
// objStorage.addItem({name: 'Rishank'});

// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string, 
    description: string, 
    date: Date
): CourseGoal {
    // return {title: title, description: description, completeUntil: date};
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly <string[]> = ['Saurabh', 'Ankita'];
// names.push('Rishank'); 
// names.pop();