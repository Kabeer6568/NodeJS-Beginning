const users = require("./users");
const UsersDB = require("../UsersDB")
const bcrypt = require("bcrypt")
let count = users.length;

const addUsers = async(req, res)=>{

    try {

      const hash = bcrypt.hashSync(req.body.password, 10);
    // users.push({id: ++count, ...req.body});
    let userobj = {...req.body, password: hash,}
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