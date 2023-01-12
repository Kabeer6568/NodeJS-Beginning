const users = require('./users');


const getUsers = async (req,res)=>{
    const {name} = req.query;
    if(name){
        return res.status(200).send(users.filter = (data)=>data.username)
    };

    return res.status(200).send(users);
}

module.exports = getUsers;