const {Router} = require("express");

const {deletePerfil, allUsers,updateUser,getOneuser} = require("../controllers/user.controller");

const router = Router()

router.delete("/users",deletePerfil)
router.get("/users/all",allUsers)
router.put("/users",updateUser)
router.get("/users",getOneuser)

module.exports = router

