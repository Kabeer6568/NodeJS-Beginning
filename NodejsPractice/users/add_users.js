const users = require("./users");
const UsersDB = require("../UsersDB")

let count = users.length;

const addUsers = async(req, res)=>{

    try {
    // users.push({id: ++count, ...req.body});
    let userobj = {...req.body}
    console.log("userobj===>" , userobj);
    const user = new UsersDB(userobj)
    const response = await user.save()
    console.log("res", response);
    res.status(200).send({status: 200, message: "User added successfully"})

    } catch (err) {
    res.status(401).send({ status: 401, err });
    console.log("err==>", err);
    
  }

}

module.exports = addUsers;