// /prisma/user.js
import prisma from "./prisma";
import { updateProject } from "./projects";

// CreateUser
export const createtemplate_contactus = async (
  Name,
  Email,
  Country,
  PhoneNumber,
  Message,
  projectid
) => {
  const result = await prisma.template_contactus.create({
    data: {
      Name,
      Email,
      Country,
      PhoneNumber,
      Message,
      APIkey: projectid,
    },
  });
  const res = await prisma.template_contactus.findMany({
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

export const gettemplate_contactus = async (projectid) => {
  const result = await prisma.template_contactus.findMany({
    where: {
      APIkey: projectid,
    },
  });
  return {
    status: true,
    result: result,
  };
};

export const deleteAllinfo_contactus = async (projectid) => {
  const res = await prisma.template_contactus.deleteMany({
    where: {
      APIkey: projectid,
    },
  });
  return {
    status: true,
    result: res,
  };
};
