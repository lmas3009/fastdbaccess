import { createtemplate_contactus2 } from "../../prisma/template_contactus2";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { Name, Email, Country, Message, APIkey } = req.body;
    await createtemplate_contactus2(Name, Email, Country, Message, APIkey)
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
