const {Router} = require("express");

const {createPerfil} = require("../controllers/user.controller");

const router = Router()

router.post("/user",createPerfil)

module.exports = router

