import { createtemplate_feedback } from "../../prisma/template_feedback";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { Name, Email, Feedback, APIkey } = req.body;
    await createtemplate_feedback(Name, Email, Feedback, APIkey)
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
