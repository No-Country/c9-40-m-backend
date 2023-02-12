const { Router } = require("express");
const { saveJobsUserCreate, deleteSavejobs, getAlljobsbyuser } = require("../controllers/saveJobsUser.controller");
const router = Router();

router.post("/saveJobsUser/:id", saveJobsUserCreate);
router.delete("/saveJobsUser/:id", deleteSavejobs);
router.get("/saveJobsUser",getAlljobsbyuser );


module.exports = router;
