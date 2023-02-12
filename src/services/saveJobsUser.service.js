const models = require("../models/index");

const { save_jobs_user, rol_tecnology, tecnology, postulation_job_reclutier , jobs} =
  models;

class saveJobsUsersService {
  static async saveJobsCreate(idJob, idUser) {
    try {
      const jobSave = {
        jobs_id: idJob,
        user_id: idUser,
      };
      const result = await save_jobs_user.create(jobSave);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteSavejobb(idJob,iduser){
    try {
      const result=await save_jobs_user.destroy({where:{user_id:iduser,jobs_id:idJob}})
      return result
    } catch (error) {
      throw error
    }
  }

  static async getAllsavejobsByuser(id){
    try {
      const result=await save_jobs_user.findAll({
        where:{user_id:id},
        include:{
          model: jobs,
          as:"job",
        }
      })
      return result
    } catch (error) {
      throw error
    }
  }

}

module.exports = saveJobsUsersService;
