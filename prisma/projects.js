// /prisma/user.js
import prisma from "./prisma";
import { deleteAllinfo_userinfo } from "./template_userinfo";
import { deleteAllinfo_newsletter } from "./template_newsletter";
import { deleteAllinfo_contactus } from "./template_contactus";
import { deleteAllinfo_contactus2 } from "./template_contactus2";
import { deleteAllinfo_feedback } from "./template_feedback";
import { updateAllUserProject, updateUserProject } from "./userinfo";

// CreateUser
export const createProject = async (
  projectname,
  projectsize,
  template,
  userid
) => {
  const result = await prisma.projects.create({
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
  return await updateUserProject(userid, projectsize, 1);
};

export const getProject = async (userid) => {
  const result = await prisma.projects.findMany({
    where: {
      userid: userid,
    },
  });

  return {
    status: true,
    result: result,
  };
};

export const getProjectByid = async (id) => {
  const result = await prisma.projects.findMany({
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
  const res = await prisma.projects.findMany({
    where: {
      id: id,
    },
  });
  const result = await prisma.projects.update({
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

export const deleteproject = async (
  projectid,
  projectsize,
  userid,
  template
) => {
  const result = await prisma.Projects.delete({
    where: {
      id: projectid,
    },
  });
  if (template === "UserInfo Database") {
    await deleteAllinfo_userinfo(projectid);
  } else if (template === "Feedback Database") {
    await deleteAllinfo_feedback(projectid);
  } else if (template === "NewsLetter Database") {
    await deleteAllinfo_newsletter(projectid);
  } else if (template === "Contact Us Database") {
    await deleteAllinfo_contactus(projectid);
  } else if (template === "Contact Us 2 Database") {
    await deleteAllinfo_contactus2(projectid);
  }

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
  return {
    status: true,
    result: "Account Deleted",
  };
};
