const mongoose = require("mongoose")

const userScheme = mongoose.Schema({
    schoolName:{
        type:String,
        required:true
    },
    schoolLocation:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:new Date
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
    }
    // note: {
    //     type:String,
    //     required:true
    // }
})

module.exports = mongoose.model("user", userScheme)






