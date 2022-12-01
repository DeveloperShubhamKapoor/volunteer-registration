const express = require("express")
const VolunteerModel = require("../../model/volunteerModel/volunteerSchema")
const volunteerRoute = express.Router()

volunteerRoute.get("/",async(req,res)=>{
    let volunteers = await VolunteerModel.find()
    res.send({data:volunteers})
})
volunteerRoute.post("/register",async(req,res)=>{
    let volunteerData = req.body
    try{
        let isRegistered =  await VolunteerModel.findOne({email:volunteerData.email})
        if(isRegistered){
            return res.send({message:"Email already exists",registered:false})
        }
        let registerVolunteer = VolunteerModel({...volunteerData})
        await registerVolunteer.save()
        return res.send({message:"volunteer registered",registered:true})
    }
    catch{
        return res.send({message:"Volunteer registered failed",registered:false})
    }
})




module.exports = volunteerRoute