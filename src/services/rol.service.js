const models = require("../models/index");

const { rol } = models;

class RolService {
  static async createRol(rol) {
    console.log("hola");
    try {
      const result = await rol.create(rol);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RolService;
