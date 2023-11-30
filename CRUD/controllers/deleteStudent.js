const Student=require('../models/student');

exports.deleteStudent=async(req,res)=>{
    try{
        const{id}=req.params;
        const student=await Student.findByIdAndDelete({_id:id});
        if(!student){
            res.status(404).json({
                success:false,
                message:"Data not present"
            })
        }
        res.status(200).json({
            success:true,
            message:"Data deleted successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}