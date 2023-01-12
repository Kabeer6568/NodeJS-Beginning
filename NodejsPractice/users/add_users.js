const users = require("./users");

let count = users.length;

const addUsers = (req, res)=>{
    users.push({id: ++count, ...req.body});
    res.status(200).send({status: 200, message: "User added successfully"})
}

module.exports = addUsers;