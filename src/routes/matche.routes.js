const {Router}=require("express")
const { createMatchh, getMatchbyuser, deleteMatchbyuser } = require("../controllers/match.controller")

const router=Router()


router.get("/matches",getMatchbyuser)
router.post("/matches/:id/user/:user",createMatchh)
router.delete("/matches/job/:id",deleteMatchbyuser)

module.exports=router