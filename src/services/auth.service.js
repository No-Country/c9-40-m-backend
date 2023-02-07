
const bcrypt=require("bcrypt")
const models=require("../models/index")
const jwt=require("jsonwebtoken")
require("dotenv").config()

const {user}=models

class AuthServices{
    static async register(userr){
        try {
            const result=await user.create(userr)
            return result
        } catch (error) {
            throw error
        }
    }

    static async login(credentials){
        try {
        const findUser=await user.findOne({where:{email:credentials.email}})
        if(findUser){
            const isValid=bcrypt.compareSync(credentials.password,findUser.password);
            return isValid?{isValid,findUser}:{isValid}
        }
        } catch (error) {
            throw error
        }
    }

    static getToken(data){
        try {
            const token=jwt.sign(data,process.env.JWT_SECRET,{expiresIn:"10m",algorithm:"HS512"})
            return token
        } catch (error) {
            throw error
        }
    }

}


module.exports=AuthServices;