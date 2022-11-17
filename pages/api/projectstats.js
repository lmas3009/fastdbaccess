import { gettemplate_userinfo } from "../../prisma/template_userinfo";

  export default async function handler(req, res) {
    if (req.method === "POST") {
      const {projectid} = req.body;
      await gettemplate_userinfo(projectid).then((result)=>{
        res.send(result)
      }).catch((err)=>{
        res.send({
            status: false,
            result: "Failed to get"
        })
      })
  }}
  