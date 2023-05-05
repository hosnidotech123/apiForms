const { json } = require("express");
const Form = require("../models/Form");
const FormServ = require("../services/formServices")


const getAllForms = async (req, res) => {
  try {
    const result = await FormServ.getForms();
    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ error });

  }

}


const createform = async (req, res) => {
  try {
    const result = await FormServ.createform(req.body);
    res.status(200).json({ result });

  } catch (error) {
    res.status(500).json({ error });

  }
}





module.exports = {
  getAllForms,
  createform,
}
