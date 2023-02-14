const {Router}=require("express")
const { getAllproyectsbyUserr, deleteProyect, createProyects, updateProyectt, getAllrepositoriesByuser, deleteRepositories, createRepositories, putRepositoriesbyUser } = require("../controllers/proyects_and_repositories.controller")

const router=Router()

router.get("/proyects",getAllproyectsbyUserr)
router.delete("/proyects/:id",deleteProyect)
router.post("/proyects",createProyects)
router.put("/proyects/:id",updateProyectt)

router.get("/repositories",getAllrepositoriesByuser)
router.delete("/repositories/:id",deleteRepositories)
router.post("/repositories",createRepositories)
router.put("/repositories/:id",putRepositoriesbyUser)

module.exports=router