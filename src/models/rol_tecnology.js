const db=require("../utils/database")

const {DataTypes}=require("sequelize")

const rol_tecnology=db.define("rol_tecnology",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    rol_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    tecnology_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports=rol_tecnology

