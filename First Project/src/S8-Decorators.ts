//decoraror to a class as a whole

function Logger(logSrring: string){ // decorator factory
    console.log('Logger Factory runs first');
    return function(constructor: Function){
        console.log(logSrring);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string){
    console.log('Template Factory runs after logger factory,');
    return function<T extends {new(...args: any[]): {name: string}}> (
        originalConstructor: T
    ){
        
            // console.log('Rendering template');
        // const hookEl = document.getElementById(hookId);
        // const p = new originalConstructor();
        // if(hookEl){
        //     hookEl.innerHTML = template;
        //     hookEl.querySelector('h1')!.textContent = p.name
        // }
        return class extends originalConstructor{
            constructor(..._: any[]){
                super();
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                // const p = new originalConstructor();
                if(hookEl){
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        };
    };
}

@Logger('LOGGING - PERSON1') //decorator pointing at the function but not executing it,

@WithTemplate('<h1>My Person Object</h1>', 'app') //bottom most decorator executed fist

class Person1 {
    name= 'Saurabh';

    constructor(){
        console.log('Creating person object....');
    }
}

const pers = new Person1();

console.log(pers);


//****************** *********************/

function Log(target: any, propertyName: string | symbol){
    console.log('Property Decorator!');
    console.log(target, propertyName);

}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | symbol, descriptor: PropertyDescriptor){
    console.log('Method Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | symbol, position: number){
    console.log('Paramenter Decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2

    set price(val: number){
        if(val > 0){
            this._price = val;
        }
        else{
            throw new Error('Invalid price - should be positive');
        }
    }

    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }

    @Log3
    getPricewithTax(@Log4 tax:number){
        return this._price * (1 + tax);
    }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get(){
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}

class Printer{
    message = 'This works!';

    @Autobind
    showMessage(){
        console.log(this.message);
    }
}

const p = new Printer();
p.showMessage();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

//*************** ********/

interface ValidatorConfig{
    [property: string]: {
        [validatable: string]: string[]; //['required','positive']
    };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructorname],
        [propName]: ['positive']
    };
}

function validate(obj: any){
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig){
        return true;
    }
    let isValid = true;
    for(const prop in objValidatorConfig){    
        // console.log(prop);
        for(const validator of objValidatorConfig[prop]){
            switch(validator){
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number){
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if(!validate(createdCourse)){
        alert('Invalid Input, please try again!');
        return;
    }
    console.log(createdCourse);
});