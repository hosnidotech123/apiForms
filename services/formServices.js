const Form = require("../models/Form")

const getForms = async ()  =>{
    return await Form.find();
}


const createform = async (form) => {
    return await Form.create(form);
  
}


module.exports = {
    getForms,createform
}