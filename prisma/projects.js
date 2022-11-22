// /prisma/user.js
import prisma from "./prisma";
import { deleteAllinfo } from "./template_userinfo";
import { updateAllUserProject, updateUserProject } from "./userinfo";

// CreateUser
export const createProject = async (
  projectname,
  projectsize,
  template,
  userid
) => {
  const result = await prisma.Projects.create({
    data: {
      projectname: projectname,
      projectsize: projectsize,
      template: template,
      userid: userid,
      created_on: new Date().toString(),
      projectvaluescount: "0",
      last_updated: new Date().toString(),
      computesize: "0 byte",
      usedprojectsize: "0",
    },
  });
  console.log(result);
  return await updateUserProject(userid, projectsize, 1);
};

export const getProject = async (userid) => {
  console.log(userid);
  const result = await prisma.Projects.findMany({
    where: {
      userid: userid,
    },
  });
  console.log(result);

  return {
    status: true,
    result: result,
  };
};

export const getProjectByid = async (id) => {
  const result = await prisma.Projects.findMany({
    where: {
      id: id,
    },
  });

  return {
    status: true,
    result: result,
  };
};

export const updateProject = async (id, _result) => {
  const res = await prisma.Projects.findMany({
    where: {
      id: id,
    },
  });
  const result = await prisma.Projects.update({
    where: {
      id: id,
    },
    data: {
      projectvaluescount: (Number(res[0].projectvaluescount) + 1).toString(),
      last_updated: new Date().toString(),
    },
  });
};

export const updateProjectComputeSIze = async (id, computesize) => {
  const result = await prisma.Projects.update({
    where: {
      id: id,
    },
    data: {
      computesize: computesize,
    },
  });
  return {
    status: true,
    result: result,
  };
};

export const deleteproject = async (projectid, projectsize, userid) => {
  const result = await prisma.Projects.delete({
    where: {
      id: projectid,
    },
  });
  await deleteAllinfo(projectid);
  await updateUserProject(userid, -Number(projectsize), -1);
};

export const deleteAllproject = async (userid) => {
  const result = await prisma.Projects.findMany({
    where: {
      userid: userid,
    },
  });
  if (Object.keys(result).length === 0) {
    console.log("undefined bye");
  } else {
    result.map(async (item, index) => {
      await prisma.Projects.delete({
        where: {
          id: item.id,
        },
      });
      await deleteAllinfo(item.id);
      await updateAllUserProject(item.userid);
    });
  }
  return{
    status: true,
    result: "Account Deleted"
  }
};
