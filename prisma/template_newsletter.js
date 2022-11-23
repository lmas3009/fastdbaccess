// /prisma/user.js
import prisma from "./prisma";
import { updateProject } from "./projects";

// CreateUser
export const createtemplate_newsletter = async (Name, Email, projectid) => {
  const result = await prisma.template_newsletter.create({
    data: {
      Name,
      Email,
      APIkey: projectid,
    },
  });
  const res = await prisma.template_newsletter.findMany({
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

export const gettemplate_newsletter = async (projectid) => {
  const result = await prisma.template_newsletter.findMany({
    where: {
      APIkey: projectid,
    },
  });
  return {
    status: true,
    result: result,
  };
};

export const deleteAllinfo_newsletter = async (projectid) => {
  const res = await prisma.template_newsletter.deleteMany({
    where: {
      APIkey: projectid,
    },
  });
  return {
    status: true,
    result: res,
  };
};
