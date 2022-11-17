// /prisma/user.js
import prisma from "./prisma";
import {updateUserProject} from "./userinfo"

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
      created_on: new Date().toString()
    },
  });
  await updateUserProject(userid,projectsize,1);
};

export const getProject = async (userid) => {
  const result = await prisma.Projects.findMany({
    where:{
      userid: userid
    }
  })

  return{
    status: true,
    result: result
  }

}


export const deleteproject = async(projectid,projectsize,userid) =>{
  const result = await prisma.Projects.delete({
    where: {
      id: projectid,
    },
  })
  await updateUserProject(userid,-Number(projectsize),-1)

} 