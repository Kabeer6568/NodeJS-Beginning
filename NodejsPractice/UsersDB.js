const mongoose = require('mongoose');


const userSchema = mongoose.Schema(
    {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    number: { type: Number, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
)

const UsersDB = mongoose.model("UsersDB", userSchema)

module.exports = UsersDB