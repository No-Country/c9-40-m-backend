const models = require("../models/index");

const {
    user 
} = models

class UserService {

    static async createUser(user) {
        try {
            const result = await user.create(user)
            return (result)
            
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserService