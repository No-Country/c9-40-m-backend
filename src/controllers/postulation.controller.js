const postulationServices = require("../services/postulation.service")
const jwt = require("jsonwebtoken");


const createPostubyuser=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const idjob=req.params.id
        const result=await postulationServices.createPostulation(id,idjob)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({message:error})
    }
}

const deletePostulationbyUser=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const idjob=req.params.id
        const result=await postulationServices.deletePostulationUser(id,idjob)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:error})
    }
}

const deletePostulationbyReclutier=async(req,res)=>{
    try {
        const idjob=req.params.id_job
        const iduser=req.params.id_user
        const result=await postulationServices.deletePostulationRecluiter(iduser,idjob)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:error})
    }
}

const getPostulationbyUserr=async(req,res)=>{
    try {
        const{page=0,size=6}=req.query;
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const result=await postulationServices.getpostulationByuser(id,size,page)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:error})
    }
}

const getPostulationByjobb=async(req,res)=>{
    try {
        const{id}=req.params
        const result=await postulationServices.getPostulationbyJob(id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:error})
    }
}


module.exports={
    getPostulationByjobb,
    getPostulationbyUserr,
    deletePostulationbyReclutier,
    deletePostulationbyUser,
    createPostubyuser
}