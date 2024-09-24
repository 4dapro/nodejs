const express = require("express");
const john = express.Router();
const con = require("../controller/control");

john.get('/', con.main);
john.post('/add-user', con.addUser);
john.get('/users', con.getUsers);
john.post('/update-user/:index', con.updateUser);
john.post('/delete-user/:index', con.deleteUser);

module.exports = john;
