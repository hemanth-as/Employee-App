const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
const Cors = require("cors");
const jwt = require('jsonwebtoken');
const bcrpt = require('bcrypt');

const employeeData = require('./routes/employeeData');
const login = require('./routes/loginData');

let app = new Express()

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }))
// app.use(Bodyparser.urlencoded({ extended: false }));
app.use(Cors());

Mongoose.connect('mongodb+srv://testerh:testerh@cluster0.jktbpdo.mongodb.net/EmployeeDB?retryWrites=true&w=majority', { useNewUrlParser: true })

app.use('', employeeData)
app.use('', login)

app.listen(3001, () => {
    console.log("Server started listening to port 3001")
})