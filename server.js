const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//middleware?
app.use(express.urlencoded({entended: false }));
app.use(express.json());

const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'company_db'
    },
    console.log('Connected to the company_db database.')
);