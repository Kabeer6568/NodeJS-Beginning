let UsersDB = require('../UsersDB');
let bcrypt = require('bcrypt');

const login = async ( req, res )=>{
    const users = await UsersDB.find({email: req.body.email});
    
    if (user.length) {
        let match = bcrypt.compareSync(req.body.password, user[0].password);
        if (match) {
            res.status(200).send({ status: 200, message: "user login successfuly" });
        }
        else {
            res.status(401).send({ status: 401, message: "email/password incorrect" });
          }
    }
    else {
        res.status(404).send({ status: 404, message: "user not found" });
      }
}

module.exports = login;