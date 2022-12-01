const express = require("express")
const ClassroomModel = require("../../model/classroomModel/classroomSchema")
const classroomRoute = express.Router()

classroomRoute.get("/",async(req,res)=>{
    let classrooms = await ClassroomModel.find()
    res.send({data:classrooms})
})
// classroomRoute.post("/register",async(req,res)=>{
//     let classroomData = req.body
//     try{
//         let isRegistered =  await classroomModel.findOne({email:classroomData.email})
//         if(isRegistered){
//             return res.send({message:"Email already exists",registered:false})
//         }
//         let registerclassroom = classroomModel({...classroomData})
//         await registerclassroom.save()
//         return res.send({message:"classroom registered",registered:true})
//     }
//     catch{
//         return res.send({message:"classroom registered failed",registered:false})
//     }
// })




module.exports = classroomRoute