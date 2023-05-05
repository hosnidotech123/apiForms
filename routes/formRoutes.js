const express=require("express")
const router=express.Router()
const formController=require("../controllers/formsControllers")


router.get("/",formController.getAllForms)
router.post("/",formController.createform)



module.exports=router
