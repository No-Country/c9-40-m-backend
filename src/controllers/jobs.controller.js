const JobsServices = require("../services/jobs.service")


const createJobb=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const job=req.body
        const result=await JobsServices.createJob(job,id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error"})
    }
}

const updateJob=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const updateJob=req.body
        const result= await JobsServices.putJob(updateJob,id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error"})
    }
}

const deleJob=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const idproduct=req.params.id
        const result=await JobsServices.deleteJob(idproduct,id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error"})
    }
}

const getJobforOne=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await JobsServices.getOnejob(id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error"})
    }
}

const getjobs=async(req,res)=>{
    try {
        const{page=0,size=6}=req.query;

        const result=await JobsServices.getAlljobs(page,size)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error"})
    }
}

const createCompany=async(req,res)=>{
    try {
        const company=req.body
        const result=await JobsServices.createCompanyy(company)
        res.status(201).json({message:"company created",result})
    } catch (error) {
        res.status(400).json({message:"error"})
    }
}

const upCompany=async(req,res)=>{
    try {
        const{id}=req.params
        const newUpcompany=req.body
        const result=await JobsServices.updateCompany(id,newUpcompany)
        res.json({message:"company update :)",result})
    } catch (error) {
        res.status(400).json({message:"error"})
    }
}


module.exports={
    getJobforOne,
    deleJob,
    updateJob,
    createJobb,
    getjobs,
    createCompany,
    upCompany
}