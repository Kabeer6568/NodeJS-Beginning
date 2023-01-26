// const users = require('./users');
const UsersDB = require('../UsersDB');


const getUsers = async (req,res)=>{
    
    try {
        const {id} = req.query
        console.log("==>", id);

        const users = await UsersDB.find({})

        return res.status(200).send(users);
    } catch (error) {
        console.log("err==>", error);
    }
    
    
    
    // const {name} = req.query;
    // if(name){
    //     return res.status(200).send(users.filter = (data)=>data.username)
    // };

    
}

module.exports = getUsers;