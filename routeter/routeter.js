const express = require("express")
const route = express.Router()
const {postUser, getUser, getOneUser, updateOne, deleteOne} = require("../controller/controller")
const imageUploader = require("../multer")


route.post("/post", imageUploader, postUser)
route.get("/get", getUser)
route.get("/get/:id", getOneUser)
route.patch("/patch/:id", updateOne)
route.delete("/delete/:id", deleteOne)

module.exports = route;



