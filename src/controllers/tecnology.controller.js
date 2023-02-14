const tecnologyServices = require("../services/tecnology.service")
const jwt = require("jsonwebtoken");

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
        res.status(400).json({ message: error });
    }
}

const createtecnoByuserr=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const tecnoId=req.params.id
        const yeastecno=req.params.year
        const tecnoUser={
            user_id:id,
            tecnology_id:tecnoId,
            years_tecnology:yeastecno
        };
        const result=await tecnologyServices.createTecnoByuser(tecnoUser)
        res.json(result)
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

const deleteTecnobyUser=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const tecnoId=req.params.id
        const result=await tecnologyServices.deletetecnoByuser(id,tecnoId)
        res.json(result)
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

const getAlltecnologyByuser=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const result=await tecnologyServices.getAllusertecno(id)
        res.json(result)
    } catch (error) {
        res.status(400).json({ message: error });
    }
}
module.exports={
    tecnologyCreate,
    getAlltecnology,
    deleteTecnology,

    deleteTecnobyUser,
    createtecnoByuserr,
    getAlltecnologyByuser
}