import { gettemplate_userinfo } from "../../prisma/template_userinfo";
import { gettemplate_newsletter } from "../../prisma/template_newsletter";
import { gettemplate_contactus } from "../../prisma/template_contactus";
import { gettemplate_contactus2 } from "../../prisma/template_contactus2";
import { gettemplate_feedback } from "../../prisma/template_feedback";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { projectid, template } = req.body;
    if (template === "UserInfo Database") {
      await gettemplate_userinfo(projectid)
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send({
            status: false,
            result: "Failed to get",
          });
        });
    } else if (template === "NewsLetter Database") {
      await gettemplate_newsletter(projectid)
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send({
            status: false,
            result: "Failed to get",
          });
        });
    } else if (template === "Feedback Database") {
      await gettemplate_feedback(projectid)
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send({
            status: false,
            result: "Failed to get",
          });
        });
    } else if (template === "Contact Us Database") {
      await gettemplate_contactus(projectid)
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send({
            status: false,
            result: "Failed to get",
          });
        });
    } else if (template === "Contact Us 2 Database") {
      await gettemplate_contactus2(projectid)
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send({
            status: false,
            result: "Failed to get",
          });
        });
    }
  }
}
