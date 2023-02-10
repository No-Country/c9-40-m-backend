const models = require("../models/index");

const { rol,rol_tecnology,tecnology } = models;

class RolService {
  static async createRol(roll) {
    try {
      const result = await rol.create(roll);
      return result;
    } catch (error) {
      throw error;
    }
  }

static async createrolTecnology(rolId,tecnoId){
  try {
    const result=await rol_tecnology.create({rol_id:rolId,tecnology_id:tecnoId})
  } catch (error) {
    
  }
}

static async getAllrol(){
  try {
    const result=await rol.findAll({
      include:{
        model:rol_tecnology,
        as:"rol_tecnology",
        attributes:["tecnology_id"],
        include:{
          model:tecnology,
          as:"tecnology",
          attributes:["name"]
        }
      }
    })
    return result
  } catch (error) {
    throw error
  }
}

static async deleteRol(id){
  try {
    const deleteTecno=rol_tecnology.destroy({where:{rol_id:id}})
    const result=await rol.destroy({where:{id}})
    return result
  } catch (error) {
    throw error
  }
}

}



module.exports = RolService;
