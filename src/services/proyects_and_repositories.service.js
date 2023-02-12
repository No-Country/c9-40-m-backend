const { NOW } = require("sequelize")
const models=require("../models/index")

const{projects,repository}=models

class Proyects_and_Repositories_Services{

static async CreateProyect(newProyect){
    try {
    const result=await projects.create(newProyect)
    return result
    } catch (error) {
        throw error
    }
}

static async deleteseProyect(idUser,idProyect){
    try {
    const result=await projects.destroy({where:{user_id:idUser,id:idProyect}})
    return result
    } catch (error) {
        throw error
    }
}

static async updateProyect(newProyect,idProyect,idUser){
    try {
        const result=await projects.update(newProyect,{where:{user_id:idUser,id:idProyect}})
        return result
    } catch (error) {
        throw error
    }
}

static async getAllproyectsbyuser(id){
    try {
        const result=await projects.findAll({where:{user_id:id}})
        return result
    } catch (error) {
        throw error
    }
}

static async createRepositoriesByuser(newRep){
    try {
        const result=await repository.create(newRep)
        return result
    } catch (error) {
        throw error
    }
}

static async deleteRepo(iduser,idRepo){
    try {
        const result=await repository.destroy({where:{user_id:iduser,id:idRepo}})
        return result
    } catch (error) {
        throw error
    }
}

static async updatePutRepositories(newUpRepo,idUser,idRepo){
    try {
      const result=await repository.update(newUpRepo,{where:{user_id:idUser,id:idRepo}})
      return result
    } catch (error) {
    throw error
    }
}

static async getAllrepo(id){
    try {
        const result=await repository.findAll({where:{user_id:id}})
        return result
    } catch (error) {
        throw error
    }
}


}

module.exports=Proyects_and_Repositories_Services