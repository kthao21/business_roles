const connection = require("./connection");

class DB {
    constructor (connection) {
        this.connection = connection;
    }

    //view all employees
    findAllEmployees () {
        // id, first name, last name, title, department name, salary, managers firstname, managers last name
        return this.connection.promise().query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, employee.manager_id  from role left join employee on employee.role_id = role.id")
    }
    
    //create employee
    createEmployee (employee) {
        return this.connection.promise().query(
            "INSERT INTO employee SET ?", employee);
    }
    
    //remove employee
    removeEmployee (employeeId) {
        return this.connection.promise().query(
            "DELETE FROM Employee WHERE id = ?", employeeId);
    }

    //update employee role
    updateEmployeeRole ( employeeId, roleId ) {
        return this.connection.promise().query(
        "UPDATE employee SET role_id = ? WHERE id = ?",
        [ roleId, employeeId ]
        );
    }

    //view all role
    findAllRoles () {
        // title, id, salary, department name
        return this.connection.promise().query(
        "SELECT role.title, role.id, role.salary, department.name from role left join department on role.department_id = department.id")
    }

    //create role
    //Issue here: You have an error in your SQL syntax for line 46(?)
    createRole (role) {
        return this.connection.promise().query(
            "INSERT INTO role (title, salary, department_id) VALUE ?", role);
    }

    //remove role
    removeRole (roleId) {
        return this.connection.promise().query(
            "DELETE FROM role WHERE id = ?", [roleId]);
    }

    //view all departments
    findAllDepartments () {
        return this.connection.promise().query(
        "SELECT * from department")
    }

    //create department
    createDepartment (department) {
        return this.connection.promise().query(
            "INSERT INTO department (name) VALUES (?)", [department]);
    }

    //remove department
    removeDepartment (departmentId) {
        return this.connection.promise().query(
            "DELETE FROM department WHERE id = ?", departmentId);
    }
}

module.exports= new DB (connection);