const express = require("express");


const app = express()


app.use(express.json())


app.use("/api/users" , require("./users"))


const PORT = 3000


app.use("/", (req,res) =>{
    res.send("Hello World")
})

app.listen(PORT, ()=>{
    console.log(`Example app listening on port ${PORT}`);
    
})