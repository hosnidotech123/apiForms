const mongoose=require("mongoose")

const formSchema=new mongoose.Schema(
    {
        nom:String,
        prenom:String,
        adresse:String,
        email:String,
        phone:String,
        message:String,

        
    }
)

const Form=mongoose.model("Form",formSchema)

module.exports=Form