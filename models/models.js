const mongoose = require("mongoose")

const userScheme = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    cloud_id:{
        type:String,
    },
    colud_url:{
        type:String,
    },
    note: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model("user", userScheme)






