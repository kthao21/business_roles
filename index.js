const inquirer = require('inquirer');

inquirer.prompt (
    [
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'action',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role'
                'Add an employee',
                'Update an employee role',
                ]
        },
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'department',
        },
        {
            type: 'input',
            message: 'What is the name of the role?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the salary of the role?',
            name: 'salary',
        },
        {
            type: 'input',
            message: 'Which department does the role belong to?',
            name: 'connection',
        },
        {
            type: 'input',
            message: `What is the employee's first name?`,
            name: 'first',
        },
        {
            type: 'input',
            message: `What is the employee's last name?`,
            name: 'last',
        },
        {
            type: 'input',
            message: `What is the employee's role?`,
            name: 'role',
        },
        {
            type: 'input',
            message: `Who is the employee's manager?`,
            name: 'manager',
        },
        {
            type: 'input',
            message: `Which employee's role do you want to update?`,
            name: 'action',
        }
    ]
)