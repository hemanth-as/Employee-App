const Mongoose = require("mongoose");
const employeeSchema = Mongoose.Schema(
    {
        name: String,
        position: String,
        location: String,
        salary: Number
    }
);

var employeeModel = Mongoose.model("Employees", employeeSchema);
module.exports = {employeeModel}