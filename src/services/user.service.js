const models = require("../models/index");

const {
    user 
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
}

module.exports = UserService