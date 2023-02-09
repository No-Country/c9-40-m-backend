const RolService = require("../services/rol.service");

const createRol = async (req, res) => {
  try {
    const user = req.body;
    const result = await RolService.register(user);
    if (result) {
      res.status(201).json({ message: "Rol create", result });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports = {
  createRol,
};
