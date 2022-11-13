import { createUser, getUser, getUserID } from "../../prisma/userinfo";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, profile } = req.body;
    await createUser(email, name, profile)
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
