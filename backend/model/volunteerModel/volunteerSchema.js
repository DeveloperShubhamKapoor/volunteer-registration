const mongoose = require("mongoose")

const volunteerSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    mobile:{type:String,required:true},
    location:{type:String,required:true},
    spokenLanguage:{type:Array,required:true},
    daysAvailable:{type:Array,required:true}
})

const VolunteerModel = mongoose.model("volunteer",volunteerSchema)

module.exports = VolunteerModel