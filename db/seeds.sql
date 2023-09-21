INSERT INTO departments (name)
VALUES  ("Marketing"),
        ("Sales and Support"),
        ("Product development"),
        ("Operations");

INSERT INTO roles (title, id, department_id, salary)
VALUES  ("Product Management", 1, "Product development", 100,000),
        ("Marketing Communications", 2, "Marketing", 70,000),
        ("Sales Support", 3, "Sales and Support", 50,000),
        ("HR", 4, "Operations", 80,000 );

INSERT INTO employees (id, first_name, last_name, title, departments, salaries, manager)
VALUES  (3, "John", "Doe", "Sales Support", "Sales and Support", 50,000, "Melissa"),
        (1, "Jane", "Smith", "Product Management", "Product development", 100,000, "Joseph"),
        (4, "Vanessa", "Hudgens", "HR", "Operations", 80,000, "Brandon"),
        (2, "Donald", "Johnson", "Marketing Communications", "Marketing", 70,000, "Steve");