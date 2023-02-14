const { Router } = require("express");
const { createRool, createRol_tecnology, getAllrols, deleteRoll, createRolByuserr, deleteRolbyUserr } = require("../controllers/rol.controller");

const router = Router();

router.post("/rol", createRool);
router.get("/rol", getAllrols);
router.delete("/rol/:id", deleteRoll);
router.post("/rol_and_tecnology",createRol_tecnology);

router.post("/rol_user/:id",createRolByuserr)
router.delete("/rol_user/:id",deleteRolbyUserr)


module.exports = router;
