const express=require('express');
const router=express.Router();

const{createStudent}=require("../controllers/createStudent");
const{getStudent,getStudentById}=require("../controllers/getStudent");
const{updateStudent}=require("../controllers/updateStudent");
const{deleteStudent}=require("../controllers/deleteStudent");

router.post("/createStudent",createStudent);
router.get("/getStudent",getStudent);
router.get("/getStudent/:id",getStudentById);
router.put("/updateStudent/:id",updateStudent);
router.delete("/deleteStudent/:id",deleteStudent);

module.exports=router;