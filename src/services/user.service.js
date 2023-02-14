const models = require("../models/index");
const bcrypt=require("bcrypt")
const {
    user,
    user_tecnology,
    user_rol,
    tecnology,
    rol,
    projects,
    postulation_job_user,
    jobs,
    postulation_job_reclutier,
    match,
    jobs_rol,
    jobs_tecnology,
    company,
    repository
} = models

class UserService {

    static async deleteUser(id) {
        try {
            const prote=await projects.destroy({where:{user_id:id}})
            const repo=await repository.destroy({where:{user_id:id}})
            const userrolz=await user_rol.destroy({where:{user_id:id}})
            const user_rolldelete=await user_tecnology.destroy({where:{user_id:id}})
            const posuser=await postulation_job_reclutier.destroy({where:{user_id:id}})
            const pore=await postulation_job_user.destroy({where:{user_id:id}})
            const delete4=await match.destroy({where:{user_id:id}})
            const delete3=await jobs_tecnology.destroy({where:{user_id:id}})
            const delete2=await jobs_rol.destroy({where:{user_id:id}})
            const compa=await company.destroy({where:{user_id:id}})
            const delete1=await jobs.destroy({where:{user_id:id}})
            const result = await user.destroy({where:{id}})
            return (result)
        } catch (error) {
            throw error
        }
    }

    static async alluser(){
        try {
            const result=await user.findAll()
            return result
        } catch (error) {
            throw error
        }
    }

    static async upUser(upUser,id){
        try {
            const findUser=await user.findByPk(id)
            upUser.email=findUser.email
            if(upUser.password){
            if(findUser.password !== upUser.password){
                const {password}=upUser;
                const hash=bcrypt.hashSync(password,10)
                upUser.password=hash;
                const result=await user.update(upUser,{where:{id}})
                return result
            }
            }else{
            upUser.password=findUser.password
            const result=await user.update(upUser,{where:{id}})
            return result 
            }
            } catch (error) {
            throw error
            }
    }

    static async getOne(id){
        try {
            const result=await user.findAll({
                where:{id},
                include:[
                    {model:user_rol,
                    as:"user_rols",
                    attributes:["rol_id"],
                    include:{
                        model:rol,
                        as:"rol",
                        attributes:["name"]
                    }
                    },
                    {model:projects,
                    as:"projects"
                    },
                    {model:repository,
                    as:"repositories"
                    }
                    /* 
                    {model:postulation_job_user,
                    as:"postulation_job_users",
                    attributes:["jobs_id","state"],
                    include:{
                    model:jobs,
                    as:"jobs",
                    attributes:{exclude:["id"]}
                    }
                    },
                    {model:jobs,
                    as:"jobs",
                    //attributes:{exclude:["id"]},
                    include:{
                    model:postulation_job_reclutier,
                    as:"postulation_job_reclutiers",
                    attributes:["user_id","state"]
                    }
                    },
                    */
                ]
            })
            return result
        } catch (error) {
        throw error        
    }
    }

}

module.exports = UserService