import { createtemplateuserinfo } from "../../prisma/template_userinfo";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { Name, Surname, Email, Age, projectid } = req.body;
    await createtemplateuserinfo(Name, Surname, Email, Age, projectid)
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
  } else {
  }
}
