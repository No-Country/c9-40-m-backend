const db = require("../utils/database");

const { user, jobs, rol, user_rol } = require("../models");

const users = [
  {
    firstname: "José",
    lastname: "Riga",
    email: "joseRiga12@gmail.com",
    password: "18/569",
  },
];

const jobss = [
  {
    title: "Developer Front-End",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg",
    country: "Uruguay",
    work_place: "Remote",
    working_day: "Part-time",
    user_id: 1,
  },
];

const rols = [
  {
    name: "Front-End MERN",
  },
];

const userRol = [
  {
    rol_id: 1,
    user_id: 1,
  },
];

db.sync({ force: true }).then(() => {
  console.log("sincronizando");
  users.forEach((u) => user.create(u));

  setTimeout(() => {
    jobss.forEach((j) => jobs.create(j));
  }, 100);

  setTimeout(() => {
    rols.forEach((r) => rol.create(r));
  }, 200);

  setTimeout(() => {
    userRol.forEach((ur) => user_rol.create(ur));
  }, 300);
});
