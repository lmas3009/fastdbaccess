import { createUser, DeleteAccount, getUser } from "../../prisma/userinfo";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.create_user) {
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
    } else if (req.body.getuser) {
      const { email } = req.body;
      await getUser(email)
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
    }
  } else if (req.method === "DELETE") {
    const { email } = req.query;
    await DeleteAccount(email)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.send({
          status: false,
          error: "Failed to delete",
        });
      });
  }
}
