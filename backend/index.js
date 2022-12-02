
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const volunteerRoute = require("./routes/volunteerRoutes/volunteer.routes")
const classroomRoute = require("./routes/classroomsRoutes/classroom.route")
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5500
app.use(express.json())
app.use(cors())

app.use("/volunteer",volunteerRoute)
app.use("/classroom",classroomRoute)

app.get("/",(req,res)=>{
    res.send({message:"Volunteer Registration"})
})

app.listen(port,async()=>{
    await mongoose.connect(process.env.SERVER)
    console.log("server started")
})