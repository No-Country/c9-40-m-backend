const usersRoutes=require("./user.routes")
const authRoutes=require("./auth.routes")


const RoutesApp=(app)=>{
    app.use("/api/v1",usersRoutes)
    app.use("/api/v1/auth",authRoutes)
}

module.exports=RoutesApp