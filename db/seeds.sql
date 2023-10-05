use company_db;

INSERT INTO department (name)
VALUES  ("Marketing"),
        ("Sales and Support"),
        ("Product development"),
        ("Operations");

INSERT INTO role (title, salary, department_id)
VALUES  ("Product Manager", 100000, 3),
        ("Marketing Communications", 70000, 1),
        ("Sales Support", 50000, 2),
        ("HR", 80000, 4),
        ("Product Associate", 100000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe", 2, NULL),
        ("Jane", "Smith", 3, NULL),
        ("Vanessa", "Hudgens", 1, NULL),
        ("Donald", "Johnson", 4, NULL), 
        ("Zac", "Efron", 5, 3);