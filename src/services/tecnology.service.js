const models=require("../models/index")
const{tecnology,rol_tecnology}=models

class tecnologyServices{

static async createTecnology(tecno){
try {
    const result=await tecnology.create(tecno)
    return result 
} catch (error) {
    throw error
}
}

static async getAlltecno(){
    try {
        const result=await tecnology.findAll()
        return result
    } catch (error) {
        throw error
    }
}

static async deleteTecnologyz(id){
    try {
        const deleterolTec=await rol_tecnology.destroy({where:{tecnology_id:id}})
        const result=await tecnology.destroy({where:{id}})
        return result
    } catch (error) {
        throw error
    }
}

}

module.exports=tecnologyServices