// /prisma/user.js
import prisma from "./prisma";

// CreateUser
export const createtemplateuserinfo = async (
  Name,
  Surname,
  Email,
  Age,
  projectid
) => {
  const result = await prisma.Template_Userinfo.create({
    data: {
      Name,
      Surname,
      Email,
      Age,
      projectid,
    },
  });
  return {
    status: true,
    result: "Data Saved",
  };
};


export const gettemplate_userinfo = async (projectid) =>{
    const result = await prisma.Template_Userinfo.findMany({
       where:{
        projectid: projectid
       }
      });
      return {
        status: true,
        result: result,
      };
}