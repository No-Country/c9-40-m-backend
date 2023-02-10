const { Router } = require("express");
const { createRool, createRol_tecnology, getAllrols, deleteRoll } = require("../controllers/rol.controller");

const router = Router();

router.post("/rol", createRool);
router.get("/rol", getAllrols);
router.delete("/rol/:id", deleteRoll);
router.post("/rol_and_tecnology",createRol_tecnology);

module.exports = router;
