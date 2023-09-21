SELECT Departments.id
FROM Roles
LEFT JOIN Departments
ON Roles.department_id = department_id
ORDER BY Departments.id;

SELECT Roles.id
FROM Employees
LEFT JOIN Roles
ON Employees.role_id = role_id
ORDER BY Roles.id;
