const users = require("./users");

const deleteUsers = (req,res)=>{
    const { id } = req.params;
    const index = users.findIndex((data) => data.id === +id);
    users.splice(index,1)
    res.status(200).send({ststus: 200, message: "User deleted successfully"});
}


module.exports = deleteUsers