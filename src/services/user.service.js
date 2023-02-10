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
    match
} = models

class UserService {

    static async deleteUser(id) {
        try {
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
            const result=await user.findByPk(id,{
                include:[
                    /* 
                    {model:match,
                    as:"matches",
                    attributes:["jobs_id"],
                    include:{
                    model:jobs,
                    as:"job",
                    attributes:{exclude:["id"]}
                    }
                    },*/
                    {model:user_tecnology,
                    as:"user_tecnology",
                    attributes:["tecnolgy_id"],
                    include:{
                        model:tecnology,
                        as:"tecnolgy",
                        attributes:["name"]
                    }
                    },
                    {model:user_rol,
                    as:"user_rols",
                    attributes:["rol_id"],
                    include:{
                        model:rol,
                        as:"rol",
                        attributes:["name"]
                    }
                    },
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