const nodemailer=require("nodemailer")
require("dotenv").config()
//ahora creamos nuestro transportador

const transporter=nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:"465",
    secure:true,
    auth:{
        user:"jobsmatch23@gmail.com",
        pass:process.env.GOOGLE_KEY,
    },
})

module.exports=transporter