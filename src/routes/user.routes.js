const {Router} = require("express");

const {deletePerfil, allUsers} = require("../controllers/user.controller");

const router = Router()

router.delete("/user/:id",deletePerfil)
router.get("/user",allUsers)

module.exports = router

