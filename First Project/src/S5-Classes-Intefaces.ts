// *********************** Creating First Class ****************************/
abstract class Department
{   //name of class starts with an upper case
    
    // private readonly id: string;
    // private name:  string;
    static fiscalyear = 2024;
    protected employees : string[] = []; //can only be accessible inside the class
    
    //protected can be used within the class and extended class as well

    constructor(protected readonly id: string, public name:string){ 
        //readonly can be accessed only in TS and not JS and once assisgned its value cant be changed 
        
        // this.id: id;
        // this.name = n;
    }
static createEMployee(name:string){
    return {name:name};
}

abstract describe(this:Department):void;

    // describe(this: Department){
    //     console.log(`Department (${this.id}):${this.name}`);
    // }

    addEmployee(employee:string){
        this.employees.push(employee);
    }
    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
} 

class ITDepartment extends Department{
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, 'IT'); //during inheritence, super keyword needs to be added in the inheriting class
        this.admins = admins;
    }

    describe(){
        console.log('IT Depadtment - ID:' + this.id);
    }
}


class AccountingDept extends Department{
    private lastReport: string;
    private static instance: AccountingDept;

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
    }
    throw new Error('No Report Found');
}

set mostRecentReport(value:string){
    if(!value){
        throw new Error ('Please pass in a value');
    } 
    this.addReport(value);
}


    private constructor(id:string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance(){
        if(AccountingDept.instance){
            return this.instance;
        }
        this.instance = new AccountingDept('d2', []);
        return this.instance;
    }


    describe(){
        console.log('Accounting Depadtment - ID:' + this.id);
    }

    addEmployee(name: string){
        if (name === 'Saurabh'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports(){
        console.log(this.reports);
    }
}

const employee1 = Department.createEMployee('Saurabh');
console.log(employee1, Department.fiscalyear);


const IT =  new ITDepartment ('d1',['Saurabh']);

IT.addEmployee('Saurabh');
IT.addEmployee('Ankita');

//accounting.employees[2] = 'Rishank'; //Adding employees in made provate within the class hence cant be accessible

// console.log(accounting);
IT.describe();
IT.name = 'Dimple'
IT.printEmployeeInfo();

console.log(IT);

//const accounting = new AccountingDept('d2', []);
const accounting = AccountingDept.getInstance();
const accounting2 = AccountingDept.getInstance();

console.log(accounting, accounting2);

accounting.mostRecentReport = 'Year End Report';

accounting.addReport('Something went wrong...');

console.log(accounting.mostRecentReport);

accounting.addEmployee('Saurabh');
accounting.addEmployee('Rishu');

accounting.printReports();
accounting.printEmployeeInfo();

accounting.describe();


// const accountingCopy = {name: 'Dummy' , describe:accounting.describe};
// accountingCopy.describe();