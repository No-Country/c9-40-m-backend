const RolService = require("../services/rol.service");

const createRool = async (req, res) => {
  try {
    const rol = req.body;
    const result = await RolService.createRol(rol);
    if (result) {
      res.status(201).json({ message: "Rol create", result });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const createRol_tecnology=async(req,res)=>{
  try {
    const{rol_id,tecnology_id}=req.body
    const result=await RolService.createrolTecnology(rol_id,tecnology_id)
    res.status(201).json({ message: "Rol_and_tecnology sync", result });
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

const getAllrols=async(req,res)=>{
  try {
    const result=await RolService.getAllrol()
    res.json(result)
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

const deleteRoll=async(req,res)=>{
  try {
    const{id}=req.params
    const result=await RolService.deleteRol(id)
    res.json({message:"Rol delete"})
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

module.exports = {
  createRool,
  createRol_tecnology,
  getAllrols,
  deleteRoll
};
