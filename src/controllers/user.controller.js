const  UserService = require("../services/user.service");


const createPerfil = async (req,res) => {
    try {
        const newUser = req.body
        const result = await UserService.createUser(newUser)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    createPerfil
}
