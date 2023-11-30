const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    roll_no:{
        type:String,
        required:true,
    },
    email:{
        type:String
    },
    mobile_number:{
        type:Number,
        validate: {
            validator: function (v) {
                return v.toString().length >= 10;
            },
            message: 'Mobile number must have at least 10 digits'
        }
    }
})

module.exports=mongoose.model("Student",studentSchema);