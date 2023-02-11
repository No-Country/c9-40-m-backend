const { Router } = require("express");
const { saveJobsUserCreate } = require("../controllers/saveJobsUser.controller");
const router = Router();

router.post("/saveJobsUser/:id", saveJobsUserCreate);


module.exports = router;
