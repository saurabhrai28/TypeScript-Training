"use strict";
// *********************** Creating First Class ****************************/
class Department {
    //protected can be used within the class and extended class as well
    constructor(id, name) {
        //readonly can be accessed only in TS and not JS and once assisgned its value cant be changed 
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name:  string;
        this.employees = []; //can only be accessible inside the class
        // this.id: id;
        // this.name = n;
    }
    describe() {
        console.log(`Department (${this.id}):${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT'); //during inheritence, super keyword needs to be added in the inheriting class
        this.admins = admins;
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
const IT = new ITDepartment('d1', ['Saurabh']);
IT.addEmployee('Saurabh');
IT.addEmployee('Ankita');
//accounting.employees[2] = 'Rishank'; //Adding employees in made provate within the class hence cant be accessible
// console.log(accounting);
IT.describe();
IT.name = 'Dimple';
IT.printEmployeeInfo();
console.log(IT);
const accounting = new AccountingDept('d2', []);
accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Saurabh');
accounting.addEmployee('Rishu');
accounting.printReports();
accounting.printEmployeeInfo();
// const accountingCopy = {name: 'Dummy' , describe:accounting.describe};
// accountingCopy.describe();
