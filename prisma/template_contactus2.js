// /prisma/user.js
import prisma from "./prisma";
import { updateProject } from "./projects";

// CreateUser
export const createtemplate_contactus2 = async (
  Name,
  Email,
  Country,
  Message,
  projectid
) => {
  const result = await prisma.template_contactus2.create({
    data: {
      Name,
      Email,
      Country,
      Message,
      APIkey: projectid,
    },
  });
  const res = await prisma.template_contactus2.findMany({
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

export const gettemplate_contactus2 = async (projectid) => {
  const result = await prisma.template_contactus2.findMany({
    where: {
      APIkey: projectid,
    },
  });
  return {
    status: true,
    result: result,
  };
};

export const deleteAllinfo_contactus2 = async (projectid) => {
  const res = await prisma.template_contactus2.deleteMany({
    where: {
      APIkey: projectid,
    },
  });
  return {
    status: true,
    result: res,
  };
};
