const MatchServices = require("../services/matches.service")
const jwt = require("jsonwebtoken");


const createMatchh=async(req,res)=>{
    try {
        const{id,user}=req.params
        const result=await MatchServices.createMatch(user,id)
        res.status(201).json({message:"matches success",result})
    } catch (error) {
        res.status(400).json({message:error})
    }
}



const getMatchbyuser=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const result=await MatchServices.getMatches(id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:error})
    }
}

const deleteMatchbyuser=async(req,res)=>{
    try {
        const jobId=req.params.id
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const result=await MatchServices.deleteMatch(jobId,id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:error})
    }
}


module.exports={
    createMatchh,
    getMatchbyuser,
    deleteMatchbyuser,

}