const models = require("../models/index");
const bcrypt=require("bcrypt")

const {
    jobs,
    user,
    company,
    jobs_tecnology,
    jobs_rol
}=models


class JobsServices{

static async createJob(job_body,userId){
try {
const result=await jobs.create({...job_body,user_id:userId})
return result
} catch (error) {
    throw error
}
}

static async tecnology_job(arrayTecnology,job_id){
    try {
        arrayTecnology.forEach( async tecnoId =>{
        const result= await jobs_tecnology.create({tecnology_id:tecnoId,jobs_id:job_id})
        return result
        })
    } catch (error) {
        throw error
    }
}

static async rol_job(arrayRol,job_id){
    try {
        arrayRol.forEach(async Rol=>{
            const result=await jobs_rol.create({rol_id:Rol,jobs_id:job_id})
            return result
        })
    } catch (error) {
        throw error
    }
}


static async deleteJob(idJob,userId){
    try {
        const result=await jobs.destroy({where:{id:idJob,user_id:userId}})
        const deleteTecno=await jobs_tecnology.destroy({where:{jobs_id:idJob}})
        const deleteRol=await jobs_rol.destroy({where:{jobs_id:idJob}})
        return result
    } catch (error) {
        throw error
    }
}

static async putJob(upJob,userId){
    try {
        if(!upJob.user_id){
            const result=await jobs.update(upJob,{where:{id:upJob.id,user_id:userId}})
            return result
        }
    } catch (error) {
        throw error
    }
}

static async deleteTecnologyjob(job_id,tecnoId){
    try {
    const result=await jobs_tecnology.destroy({where:{jobs_id:job_id,tecnology_id:tecnoId}})
    return result
    } catch (error) {
        throw error
    }
}

static async deleteRoljob(job_id,rolId){
    try {
    const result=await jobs_rol.destroy({where:{jobs_id:job_id,rol_id:rolId}})
    return result
    } catch (error) {
        throw error
    }
}

//datos del reclutador y compañia
static async getOnejob(id){
try {
    const result=await jobs.findByPk(id,{
        include:[
            {model:user,
            as:"user",
            include:{
            model:company,
            as:"companies"
            }  
            }
        ]
    })
    return result
} catch (error) {
    throw error
}
}

//
static async getAlljobs(page,size){
    try {
        let options={
            limit: Number(size),
            offset: Number(page) * Number(size)
            }
        const result=await jobs.findAndCountAll(options)
       return({total:result.count,jobs:result.rows}) 
     } catch (error) {
        throw error
     }
}

static async createCompanyy(newcompany){
    try {
        const result=await company.create(newcompany)
        return result
    } catch (error) {
        throw error
    }
}

static async updateCompany(id,updatecom){
    try {
        const result=await company.update(updatecom,{where:{id}})
        return result
    } catch (error) {
        throw error
    }
}

}


module.exports=JobsServices