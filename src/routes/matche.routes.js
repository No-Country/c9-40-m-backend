const {Router}=require("express")
const { createMatchh } = require("../controllers/match.controller")

const router=Router()


router.get("/matches")
router.post("/matches/:id/user/:user",createMatchh)
router.delete("/matches/job/:id")

module.exports=router