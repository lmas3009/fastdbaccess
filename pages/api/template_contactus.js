import { createtemplate_contactus } from "../../prisma/template_contactus";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { Name, Email, Country, PhoneNumber, Message, APIkey } = req.body;
    await createtemplate_contactus(
      Name,
      Email,
      Country,
      PhoneNumber,
      Message,
      APIkey
    )
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
