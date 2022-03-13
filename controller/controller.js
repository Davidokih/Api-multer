const UserInfo = require("../models/models")
const cloudinary = require("../cloudinary")
const fs = require('fs')

const postUser = async (req, res)=>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        const userPut = await UserInfo.create({
            schoolName: req.body.schoolName,
            schoolLocation: req.body.schoolLocation,
            image: req.file.path,
            cloud_id: result.public_id,
            colud_url: result.secure_url,
        })
        res.status(201).json({message:"data created successfully", data:userPut})
    } catch (error) {
        console.log(error.message)
    }
}

const getUser = async(req, res)=>{
    try{
        const getAll = await UserInfo.find()
        res.status(200).json({messsage:"element return successfully", data: getAll})
    }catch(error){
        console.log(error.message)
    }
}

const getOneUser = async(req, res)=>{
    try{
        const id = req.params.id
        const getOne = await UserInfo.findById(id)
        res.status(200).json({
            status:"success",
            data: getOne
        })
    }catch(error){
        res.json({
            status: "Fail",
            message: error.message
        })
    }
}



const updateOne = async (req, res)=>{
    try{
        const value = await UserInfo.findByIdAndupdate(req.params.id, req.body, {new: true})
        res.status(200).json({
            status: "success",
            data:{
                value
            }
        })
    }catch(error){
        res.json({
            status:"Fail",
            message: error.message
        })
    } 
}

const deleteOne = async (req, res)=>{
    try{
        const id = req.params.id
        const blog = await UserInfo.findById(id)
        await cloudinary.uploader.destroy(id)
        await fs.unlinkSync(blog.image)
        await UserInfo.findByIdAndRemove(id)
        res.status(204).json({
            status: 'Remove successfully'
        })
    }catch(error){
        res.json({
            status:"Fail",
            message: error.message
        })
    }
}

module.exports ={
    postUser,
    getUser,
    getOneUser,
    updateOne,
    deleteOne
}





