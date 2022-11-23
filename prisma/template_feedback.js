// /prisma/user.js
import prisma from "./prisma";
import { updateProject } from "./projects";

// CreateUser
export const createtemplate_feedback = async (
  Name,
  Email,
  Feedback,
  projectid
) => {
  const result = await prisma.template_feedback.create({
    data: {
      Name,
      Email,
      Feedback,
      APIkey: projectid,
    },
  });
  const res = await prisma.template_feedback.findMany({
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

export const gettemplate_feedback = async (projectid) => {
  const result = await prisma.template_feedback.findMany({
    where: {
      APIkey: projectid,
    },
  });
  return {
    status: true,
    result: result,
  };
};

export const deleteAllinfo_feedback = async (projectid) => {
  const res = await prisma.template_feedback.deleteMany({
    where: {
      APIkey: projectid,
    },
  });
  return {
    status: true,
    result: res,
  };
};
