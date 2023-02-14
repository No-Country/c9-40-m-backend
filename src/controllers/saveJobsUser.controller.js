const saveJobsUsersService = require("../services/saveJobsUser.service");
const jwt = require("jsonwebtoken");

const saveJobsUserCreate = async (req, res) => {
  try {
    const idJob = req.params.id;
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    const tokendecode = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = tokendecode;
    const result = await saveJobsUsersService.saveJobsCreate(idJob, id);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const deleteSavejobs=async(req,res)=>{
  try {
    const idJob = req.params.id;
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    const tokendecode = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = tokendecode;
    const result = await saveJobsUsersService.deleteSavejobb(idJob, id);
    res.json(result)
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

const getAlljobsbyuser=async(req,res)=>{
  try {
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    const tokendecode = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = tokendecode;
    const result=await saveJobsUsersService.getAllsavejobsByuser(id)
    res.json(result)
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

module.exports = { 
  saveJobsUserCreate,
  getAlljobsbyuser,
  deleteSavejobs
};
