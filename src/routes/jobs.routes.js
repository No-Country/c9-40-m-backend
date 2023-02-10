const {Router}=require("express");
const { getJobforOne, deleJob, updateJob, createJobb, getjobs, createCompany, upCompany } = require("../controllers/jobs.controller");

const router=Router()


router.post("/company",createCompany)
router.post("/company/:id",upCompany)

router.get("/jobs/:id",getJobforOne)
router.delete("/jobs/:id",deleJob)
router.post("/jobs",createJobb)
router.put("/jobs",updateJob)

//seria con query esta manera /jobs?page=0&size=5
router.get("/jobs",getjobs)


module.exports=router