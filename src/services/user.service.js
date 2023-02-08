const models = require("../models/index");
const bcrypt=require("bcrypt")
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
            const result=await user.findByPk(id)
            return result
        } catch (error) {
        throw error        
    }
    }

}

module.exports = UserService