const {Router}=require("express")
const { tecnologyCreate, deleteTecnology, getAlltecnology } = require("../controllers/tecnology.controller")

const router=Router()

router.post("/tecnology",tecnologyCreate)
router.get("/tecnology",getAlltecnology)
router.delete("/tecnology/:id",deleteTecnology)


module.exports=router