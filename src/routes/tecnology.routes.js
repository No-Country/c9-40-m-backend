const {Router}=require("express")
const { tecnologyCreate, deleteTecnology, getAlltecnology, deleteTecnobyUser, createtecnoByuserr, getAlltecnologyByuser } = require("../controllers/tecnology.controller")

const router=Router()

router.post("/tecnology",tecnologyCreate)
router.get("/tecnology",getAlltecnology)
router.delete("/tecnology/:id",deleteTecnology)

router.get("/user_tecnology",getAlltecnologyByuser)

router.post("/user_tecnology/:id/years/:year",createtecnoByuserr)
router.delete("/user_tecnology/:id",deleteTecnobyUser)


module.exports=router