const Student=require('../models/student');

exports.createStudent=async(req,res)=>{
    try{
     const{name,roll_no,email,mobile_number}=req.body;

     const student= await Student.create({name,roll_no,email,mobile_number});
     
     res.status(200).json({
        success:true,
        data:student,
        message:"Entry created successfully"
     })

    }catch(error){
     res.status(500).json({
        success:false,
        data:"Internal server error",
        message:error.message
    })
    }
}