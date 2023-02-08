const  UserService = require("../services/user.service");


const deletePerfil = async (req,res) => {
    try {
        const id = req.params.id
        const result = await UserService.deleteUser(id)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const allUsers=async(req,res)=>{
    try {
        const result=await UserService.alluser()
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
module.exports = {
    deletePerfil,
    allUsers
}
