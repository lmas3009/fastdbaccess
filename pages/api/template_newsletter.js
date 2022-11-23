import { createtemplate_newsletter } from "../../prisma/template_newsletter";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { Name, Email, APIkey } = req.body;
    await createtemplate_newsletter(Name, Email, APIkey)
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
