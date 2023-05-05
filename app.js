const express=require("express");
const app=express();

const formRouter=require("./routes/formRoutes")
const mongoose=require("mongoose") 
const cors = require("cors")




require("dotenv").config()


mongoose.connect(process.env.MONGO_URI)
.then(result=>
    app.listen(3500,()=>{
        console.log("server is running");
    }))
.catch(error=>console.log(error))

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use("/forms",formRouter)

app.get("/",(req,res)=>{
   res.send("<h2> Bienvneue dans notre app Express</h2>");
});


module.exports = app;