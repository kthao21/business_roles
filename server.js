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
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role'
            ]
        }
    ).then((response) => {
        if (response.question === 'View all departments') {
            viewAllDepartments();
        } else if (response.question === 'View all roles') {
            viewAllRoles();
        } else if (response.question === 'View all employees') {
            viewAllEmployees();
        } else if (response.question === 'Add a department') {
            addDepartment();
        } else if (response.question === 'Add a role') {
            addRole();
        } else if (response.question === 'Add an employee') {
            addEmployee();
        } else if (response.question === 'Update an employee role') {
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

async function addDepartment() {
    const [departments] = await db.findAllDepartments()
    const departmentChoices = departments.map((department) => {
        return {
            value: department.id,
            name: department.name
        }
    })
    inquirer.prompt ([{
        //name of the department
        type: "input",
        name: 'department',
        message: "What is the name of the department?",
    }]).then ((response) => {
        console.log(response);
    
        const department = {
            name: response.department

        }

    db.createDepartment(department).then(([data])=> {
        console.table(data)
        init()
    })
})}

function viewAllEmployees() {
    db.findAllEmployees().then(([data])=> {
        console.table(data)
        init()
    })
}

async function addRole() {
    const [roles] = await db.findAllRoles()
    const roleChoices = roles.map((role) => {
        return {
            value: role.id,
            name: role.title
        }
    })
    inquirer.prompt ([{
        //title(name), salary, and department for the role
        type: "input",
        name: 'title',
        message: "What is the title of this role?",
    }, {
        type: 'input',
        name:'salary',
        message: 'What is the salary for this role?'
    }, {
        type: 'list',
        name:'department',
        message: 'Which department does this role belong to?',
        choices: roleChoices
    }]).then ((response) => {
        console.log(response);
    
        const role = {
            title: response.title,
            salary: response.salary,
            department_id: response.department
        }
    db.createRole(role).then(([data])=> {
        console.table(data)
        init()
    })
})}

async function addEmployee() {
    const [roles] = await db.findAllRoles()
    console.log(roles);

    const roleChoices = roles.map((role) => {
        return {
            name: role.title,
            value: role.id
        }
    })

    // HELP: manager is declared but value never read
    // const managerChoices = managers.map((manager) => {
    //     return {
    //         name: employee.manager_id,
    //         value: employee.id
    //     }
    // })

    inquirer.prompt ([{
        //employee’s first name, last name, role, and manager
        type: "input",
        name: 'firstName',
        message: "What is the first name of the employee?"
    }, {
        type: 'input',
        name:'lastName',
        message: 'What is the last name of the employee?'
    }, {
        type: 'list',
        name:'role',
        message: 'What is their role?',
        choices: roleChoices
    // }, {
    //     type: 'list',
    //     name:'manager',
    //     message: "Who is the employee's manager?",
    //     choices: managerChoices
    }]).then ((response) => {
        console.log(response);
    
        const employee = {
            first_name: response.firstName,
            last_name: response.lastName,
            role_id: response.role,
            manager_id: response.manager
        }

    db.createEmployee(employee).then(([data])=> {
        console.table(data)
        init()
    })})
}

async function updateEmployee() {
    const [employees] = await db.findAllEmployees()
    console.log(employees);

    const roleChoices = roles.map((role) => {
        return {

            value: role_id
        }
    })

    inquirer.prompt ({
        //select an employee to update and their new role
        type: "list",
        name: 'employees',
        message: "Which employee would you like to update?",
        choices: roleChoices
    }).then ((response) => {
        console.log(response);
    })
    db.updateEmployeeRole(employees).then(([data])=> {
        console.table(data)
        init()
    })
}

init()