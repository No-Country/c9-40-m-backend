const models = require("../models/index");

const { save_jobs_user, rol_tecnology, tecnology, postulation_job_reclutier } =
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
}

module.exports = saveJobsUsersService;
