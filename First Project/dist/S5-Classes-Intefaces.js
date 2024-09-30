"use strict";
// *********************** Creating First Class ****************************/
class Department {
    //protected can be used within the class and extended class as well
    constructor(id, name) {
        //readonly can be accessed only in TS and not JS and once assisgned its value cant be changed 
        this.id = id;
        this.name = name;
        this.employees = []; //can only be accessible inside the class
        // this.id: id;
        // this.name = n;
    }
    static createEMployee(name) {
        return { name: name };
    }
    // describe(this: Department){
    //     console.log(`Department (${this.id}):${this.name}`);
    // }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// private readonly id: string;
// private name:  string;
Department.fiscalyear = 2024;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT'); //during inheritence, super keyword needs to be added in the inheriting class
        this.admins = admins;
    }
    describe() {
        console.log('IT Depadtment - ID:' + this.id);
    }
}
class AccountingDept extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No Report Found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a value');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDept.instance) {
            return this.instance;
        }
        this.instance = new AccountingDept('d2', []);
        return this.instance;
    }
    describe() {
        console.log('Accounting Depadtment - ID:' + this.id);
    }
    addEmployee(name) {
        if (name === 'Saurabh') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEMployee('Saurabh');
console.log(employee1, Department.fiscalyear);
const IT = new ITDepartment('d1', ['Saurabh']);
IT.addEmployee('Saurabh');
IT.addEmployee('Ankita');
//accounting.employees[2] = 'Rishank'; //Adding employees in made provate within the class hence cant be accessible
// console.log(accounting);
IT.describe();
IT.name = 'Dimple';
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
