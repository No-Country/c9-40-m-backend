const usersRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");
const rolRoutes = require("./rol.routes");
const jobsRoutes = require("./jobs.routes");
const saveJobsUserRoutes = require("./saveJobsUser.routes");

const RoutesApp = (app) => {
  app.use("/api/v1", usersRoutes);
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/rol", rolRoutes);
  app.use("/api/v1", jobsRoutes);
  app.use("/api/v1", saveJobsUserRoutes);
};

module.exports = RoutesApp;
