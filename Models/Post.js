const mongoose=require('mongoose');
const Postschema =mongoose.Schema({
    personalinfo:
    {
        type:String,
        required: true,
       
    },
    education: {
        type:String,
        required: true,
        
    },
    work: {
        type:String,
        required: true
    },
    skills: {
        type:String,
        required: true
    },
    hobbies: {
        type:String,
        required: true
    },
})
module.exports=mongoose.model('Posts',Postschema);