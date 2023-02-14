const Mongoose = require("mongoose");
const userSchema = Mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }

    }
);

var userModel = Mongoose.model("Users", userSchema);
module.exports = userModel;