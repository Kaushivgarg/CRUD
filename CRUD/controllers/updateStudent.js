const Student=require('../models/student');

exports.updateStudent=async(req,res)=>{
    try{
        const{id}=req.params;
        const{name,roll_no,email,mobile_number}=req.body;

        const student=await Student.findByIdAndUpdate({_id:id},{name,email,roll_no,mobile_number})

        const updatedStudent=await Student.findById({_id:id});
        res.status(200).json({
            success:true,
            data:updatedStudent,
            message:"Entry updated successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}