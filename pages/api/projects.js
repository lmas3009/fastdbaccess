import {
  createProject,
  deleteproject,
  getProject,
  getProjectByid,
  updateProjectComputeSIze,
} from "../../prisma/projects";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { projectname, projectsize, template, userid } = req.body;
    await createProject(projectname, projectsize, template, userid)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.send({
          status: false,
          error: "Failed to create",
        });
      });
  } else if (req.method === "GET") {
    if (req.query.projectbyid === "false") {
      const { id } = req.query;
      await getProject(id)
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.log(err);
          res.send({
            status: false,
            error: "Failed to get123",
          });
        });
    } else {
      const { id } = req.query;
      await getProjectByid(id)
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.log(err);
          res.send({
            status: false,
            error: "Failed to get",
          });
        });
    }
  } else if (req.method === "DELETE") {
    const { projectid, projectsize, userid,template } = req.query;
    await deleteproject(projectid, projectsize, userid,template)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.send({
          status: false,
          error: "Failed to get",
        });
      });
  } else if (req.method === "PUT") {
    const { id,computesize } = req.body;
    await updateProjectComputeSIze(id,computesize)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.send({
          status: false,
          error: "Failed to put",
        });
      });
  }
}
