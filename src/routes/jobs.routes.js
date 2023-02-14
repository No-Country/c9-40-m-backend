const {Router}=require("express");
const { getJobforOne, deleJob, updateJob, createJobb, getjobs, createCompany, upCompany,infoCompany,aggnewTecnology, aggrolJob, deleteJobRol, deleteTecnojob, updateSalary, deleteCompany } = require("../controllers/jobs.controller");

const router=Router()

router.get("/company/:id",infoCompany)
router.post("/company",createCompany)
router.put("/company/:id",upCompany)
router.delete("/company/:id",deleteCompany)

router.get("/jobs/:id",getJobforOne)
router.delete("/jobs/:id",deleJob)
router.post("/jobs",createJobb)
router.put("/jobs/:id",updateJob)

router.post("/jobs/:id/tecnology",aggnewTecnology)
router.post("/jobs/:id/rol",aggrolJob)
router.delete("/jobs/:id/tecnology",deleteJobRol)
router.delete("/jobs/:id/rol",deleteTecnojob)
router.put("/jobs/:id/salary",updateSalary)

//seria con query esta manera /jobs?page=0&size=5
router.get("/jobs",getjobs)


module.exports=router