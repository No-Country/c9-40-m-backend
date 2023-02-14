const{Router}=require("express")
const { deletePostulationbyReclutier, getPostulationByjobb, getPostulationbyUserr, createPostubyuser, deletePostulationbyUser } = require("../controllers/postulation.controller")

const router=Router()

router.delete("/postulation_reclutier/user/:id_user/job/:id_job",deletePostulationbyReclutier)
router.get("/postulation/recluter",getPostulationByjobb)


router.get("/postulation/user",getPostulationbyUserr)
router.post("/postulation/user/job/:id",createPostubyuser)
router.delete("/postulation/user/job/:id",deletePostulationbyUser)


module.exports=router