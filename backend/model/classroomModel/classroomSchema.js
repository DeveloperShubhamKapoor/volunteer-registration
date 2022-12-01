const mongoose = require("mongoose")

const classroomSchema = new mongoose.Schema({
    classroomId:{type:String,required:true},
    capacity:{type:Number,required:true},
    requirement:{type:Number,required:true},
    subjects:{type:Array,required:true},
    languageRequirement:{type:Array,required:true},
    location:{type:String,required:true}
})

const ClassroomModel = mongoose.model("classroom",classroomSchema)


module.exports = ClassroomModel