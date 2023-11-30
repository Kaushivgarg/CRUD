const Student=require('../models/student');

exports.getStudent=async(req,res)=>{
    try{
        const students=await Student.find({});

        res.status(200).json({
            success:true,
            data:students,
            message:"Data fetched successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
   
}


exports.getStudentById=async(req,res)=>{
    try{
        const{id}=req.params;
        const student=await Student.findById({_id:id});

        if(!student){
          return res.status(404).json({
            success:false,
            message:"No data with given id"
          })
        }

        res.status(200).json({
            success:true,
            data:student,
            message:"Data fetched with given id"
        })
    }catch(error){
        res.status(500).json({
          success:false,
          message:error.message
        })
    }
}