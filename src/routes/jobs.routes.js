const {Router}=require("express");
const { getJobforOne, deleJob, updateJob, createJobb, getjobs, createCompany, upCompany, aggnewTecnology, aggrolJob, deleteJobRol, deleteTecnojob, updateSalary } = require("../controllers/jobs.controller");

const router=Router()


router.post("/company",createCompany)
router.put("/company/:id",upCompany)

router.get("/jobs/:id",getJobforOne)
router.delete("/jobs/:id",deleJob)
router.post("/jobs",createJobb)
router.put("/jobs",updateJob)

router.post("/jobs/:id/tecnology",aggnewTecnology)
router.post("/jobs/:id/rol",aggrolJob)
router.delete("/jobs/:id/tecnology",deleteJobRol)
router.delete("/jobs/:id/rol",deleteTecnojob)
router.put("/jobs/:id/salary",updateSalary)
//seria con query esta manera /jobs?page=0&size=5
router.get("/jobs",getjobs)


module.exports=router