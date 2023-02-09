const { Router } = require("express");
const { createRol } = require("../controllers/rol.controller");

const router = Router();

router.post("/register", createRol);

module.exports = router;
