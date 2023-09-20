INSERT INTO departments (name)
VALUES  ("Marketing"),
        ("Sales and Support"),
        ("Product development"),
        ("Operations");

INSERT INTO roles ( title, id, department_id, salary )
VALUES  ("Product Management", 1, "Product development", 100,000),
        ("Marketing Communications", 2, "Marketing", 70,000),
        ("Sales Support", 3, "Sales and Support", 50,000),
        ("HR", 4, "Operations", 80,000 );

INSERT INTO employees ( id, first_name, last_name, title, departments, salaries, manager)
VALUES ()