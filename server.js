const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = require('./db');

function init() {
    inquirer.prompt(
        {
            type: 'list',
            message: '',
            name: 'question',
            choices: [
                'view all departments',
                'view all roles',
                'view all employees',
                'add a department',
                'add a role',
                'add an employee',
                'update an employee role'
            ]
        }
    ).then((response) => {
        if (response.question === 'view all departments') {
            viewAllDepartments();
        } else if (response.question === 'view all roles') {
            viewAllRoles();
        } else if (response.question === 'view all employees') {
            viewAllEmployees();
        } else if (response.question === 'add a department') {
            addDepartment();
        } else if (response.question === 'add a role') {
            addRole();
        } else if (response.question === 'add an employee') {
            addEmployee();
        } else if (response.question === 'update an employee role') {
            updateEmployee();
        }
    })
}

function viewAllDepartments() {
    db.findAllDepartments().then(([data])=> {
        console.table(data)
        init()
    })
}

function viewAllRoles() {
    db.findAllRoles().then(([data])=> {
        console.table(data)
        init()
    })
}

function addDepartment() {
    db.createDepartment().then(([data])=> {
        console.table(data)
        init()
    })
}

function viewAllEmployees() {
    db.findAllEmployees().then(([data])=> {
        console.table(data)
        init()
    })
}

function addRole() {
    db.createRole().then(([data])=> {
        console.table(data)
        init()
    })
}

function addEmployee() {
    db.createEmployee().then(([data])=> {
        console.table(data)
        init()
    })
}

function updateEmployee() {
    db.updateEmployeeRole().then(([data])=> {
        console.table(data)
        init()
    })
}

init()