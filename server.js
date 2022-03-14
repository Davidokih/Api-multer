
const express = require('express')
const mongoose = require('mongoose')
const port = 2030
const app = express()
const myRoute = require("./routeter/routeter")
require('dotenv').config()

//Creating url database
const url = ATLAS_KEY


//Making use mongodb to create a database
mongoose.connect(url).then(()=>{
    
    console.log("database connect successfully")
}).catch((error)=>{
    console.log(error.message)
})


app.use(express.json())
app.use('', express.static('./uploads'))
app.use("/api", myRoute)

// app.get("/", (req, res)=>{
//     res.status(200).json({message: "Api is working"})
// })




//listening to port 
app.listen(port,()=>{
    console.log("i'm running on this port " + port);
})