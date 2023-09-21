const connection = require("./connection");

class DB {
    constructor (connection) {
        this.connection = connection;
    }

    //view all employees
    findAllEmployees () {
        return this.connection.promise().query(
        "SELECT * from Employees")
    }
    
    //create role
    createRole (role) {
        return this.connection.promise().query(
            "INSERT INTO Roles SET ?", role);
    }

    //remove role
    removeRole (roleId) {
        return this.connection.promise().query(
            "DELETE FROM Roles WHERE id = ?", roleId);
    }

    //
}