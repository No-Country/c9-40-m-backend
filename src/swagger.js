const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config()

const options={
    apis:[""],
    definition:{
        openapi:"3.0.0",
        info:{
      title:"Jobs_api",
      version:"0.0.9",
      description:"Team backend Nao stiven, Damian , Bryan"
        }
    }
}

const swaggerSpec=swaggerJSDoc(options)

const swaggerDocs=(app,port)=>{

    app.use("/api/v1/docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))
    app.get("/api/v1/docs.json",(req,res)=>{
        res.setHeader("Content-Type","application/json")
        res.send(swaggerSpec)
    })
    
console.log(`La documentacion esta disponible ${process.env.URL}:9000/api/v1/docs`)
    }
    
module.exports=swaggerDocs