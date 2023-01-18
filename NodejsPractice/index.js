const express = require("express");
const mongoose = require("mongoose")

const app = express()


app.use(express.json())

try {
    mongoose.connect("mongodb+srv://admin:admin@cluster0.eqg1biz.mongodb.net/?retryWrites=true&w=majority")

        console.log("Connected");
    
} catch (error) {
    console.log("err ==> ", error)
}

// mongoose.connect("mongodb+srv://admin:admin@cluster0.eqg1biz.mongodb.net/?retryWrites=true&w=majority")
// .try (
//     ()=> {
//         console.log("Connected");
//     }
//  ) .catch ((err) => console.log("err ==> ", err))


const test =  app.use("/api/users" , require("./users"))


const PORT = 3000


app.use("/", (req,res) =>{
    res.send("Hello World")
})

app.listen(PORT, ()=>{
    console.log(`Example app listening on port ${PORT}`);
    
})