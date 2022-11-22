// /prisma/user.js
import prisma from "./prisma";
import { deleteAllproject } from "./projects";

// CreateUser
export const createUser = async (email, name, profile) => {
  const user1 = await prisma.UserInfo.findMany({
    where: { Email: email },
  });
  if (Object.keys(user1).length !== 0 && user1[0].Email === email) {
    const result = {
      id: user1[0].id,
    };
    return {
      status: true,
      result: result,
    };
  } else {
    const result = await prisma.UserInfo.create({
      data: {
        Name: name,
        Email: email,
        Profile: profile,
        ProjectCount: "5",
        StorageSize: "20",
      },
    });
    return {
      status: true,
      result: result,
    };
  }
};

// Read
export const getUser = async (email) => {
  const user = await prisma.UserInfo.findMany({
    where: { Email: email },
  });
  if (Object.keys(user).length !== 0 && user[0].Email === email) {
    return {
      status: true,
      result: user[0],
    };
  } else {
    return {
      status: false,
      error: "User not found",
    };
  }
};

// Read All
export const getUserID = async (id) => {
  const user = await prisma.UserInfo.findMany({
    where: { id },
  });

  return {
    status: true,
    result: user,
  };
};

export const updateUserProject = async (id, StorageSize,projectcount) => {
  const get = await getUserID(id);
  const user = await prisma.UserInfo.update({
    where: { id },
    data: {
      StorageSize: (
        Number(get.result[0].StorageSize) - Number(StorageSize)
      ).toString(),
      ProjectCount: (Number(get.result[0].ProjectCount) - projectcount).toString(),
    },
  });

  return {
    status: true,
    result: user,
  };
};

export const updateAllUserProject = async (id) => {
  const user = await prisma.UserInfo.update({
    where: { id },
    data: {
      StorageSize: "20",
      ProjectCount: "5",
    },
  });

  return {
    status: true,
    result: user,
  };
};


export const DeleteAccount = async (email) => {
  const result = await prisma.UserInfo.findMany({
    where: {
      Email: email
    },
  })
  await prisma.UserInfo.delete({
    where: {
      id: result[0].id
    }
  })
  return await deleteAllproject(result[0].id);
}