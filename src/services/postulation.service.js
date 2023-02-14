
const models=require("../models/index")

const {postulation_job_user,postulation_job_reclutier,jobs}=models

class postulationServices{

static async createPostulation(idUser,idJob){
    try {
        const find=await postulation_job_user.findOne({where:{jobs_id:idJob,user_id:idUser}})
        const postulatio={
            user_id:idUser,
            jobs_id:idJob,
            state: "waiting"}
        const findJob=await jobs.findOne({where:{id:idJob,user_id:idUser}})
        if(findJob){
            return {message:"no puede postular a una vacante que usted publicó"}
        }else{
        if(find){
            return {message:"ya usted postulo a este trabajo"}
        }else{
        const postReclutier=await postulation_job_reclutier.create(postulatio)
        const result=await postulation_job_user.create(postulatio)
        return result
        }
        }
    } catch (error) {
        throw error
    }
}

static async deletePostulationUser(idUser,idJob){
try {
    const result=await postulation_job_user.destroy({where:{user_id:idUser,jobs_id:idJob}})
    const findup=await postulation_job_reclutier.findOne({where:{user_id:idUser,jobs_id:idJob}})
    if(findup){
    const update=await postulation_job_reclutier.update({state:"user canceled the postulation"},{where:{user_id:idUser,jobs_id:idJob}})
    }
    return result
} catch (error) {
    throw error
}
}

static async deletePostulationRecluiter(idUser,idJob){
    try {
    const findd=await postulation_job_user.findOne({where:{user_id:idUser,jobs_id:idJob}})
    const result=await postulation_job_reclutier.destroy({where:{user_id:idUser,jobs_id:idJob}})
    if(findd){
        const finde=await postulation_job_user.update({state:"recruiter rejects the application"},{where:{user_id:idUser,jobs_id:idJob}})
    }
    return result
    } catch (error) {
        throw error
    }
}

static async getpostulationByuser(id,size,page){
    try {
        let options={
            limit: Number(size),
            offset: Number(page) * Number(size)
            }
        const result=await postulation_job_user.findAndCountAll(options,{
            where:{user_id:id},
            attributes:{exclude:["user_id"]},
            include:{
                model: jobs,
                as:"job",
            }
            
        })
        return result//({total:result.count,Postulation_job:result.rows})
    } catch (error) {
        throw error
    }
}

static async getPostulationbyJob(id){
    try {
        const result=await postulation_job_reclutier.findAll({
            where:{jobs_id:id},
            attributes:["user_id"],
            where:{user_id:id},
            include:{
            model: jobs,
            as:"job",
            }
        })
        return result
    } catch (error) {
        throw error
    }
}
}

module.exports=postulationServices