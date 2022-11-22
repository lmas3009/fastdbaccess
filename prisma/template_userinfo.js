// /prisma/user.js
import prisma from "./prisma";
import { updateProject } from "./projects";

// CreateUser
export const createtemplateuserinfo = async (
  Name,
  Surname,
  Email,
  Age,
  projectid
) => {
  const result = await prisma.template_userinfo.create({
    data: {
      Name,
      Surname,
      Email,
      Age,
      APIkey:projectid,
    },
  });
  const res = await prisma.template_userinfo.findMany({
    where: {
      APIkey: projectid,
    },
  });
  await updateProject(projectid, res);

  return {
    status: true,
    result: "Data Saved",
  };
};

export const gettemplate_userinfo = async (projectid) => {
  const result = await prisma.template_userinfo.findMany({
    where: {
      APIkey: projectid,
    },
  });
  return {
    status: true,
    result: result,
  };
};


export const deleteAllinfo = async (projectid)=>{
  const res = await prisma.template_userinfo.deleteMany({
    where: {
      APIkey:projectid
    },
  })
  return{
    status: true,
    result: res
  }
}