const tecnologyServices = require("../services/tecnology.service")


const tecnologyCreate=async(req,res)=>{
    try {
        const tecno=req.body
        const result=await tecnologyServices.createTecnology(tecno)
        res.json({message:"tecnology created",result})
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

const getAlltecnology=async(req,res)=>{
    try {
        const result=await tecnologyServices.getAlltecno()
        res.json(result)
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

const deleteTecnology=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await tecnologyServices.deleteTecnologyz(id)
        res.json({message:"tecnology delete",result})
    } catch (error) {
        throw error
    }
}

module.exports={
    tecnologyCreate,
    getAlltecnology,
    deleteTecnology
}