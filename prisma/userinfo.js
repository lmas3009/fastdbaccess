// /prisma/user.js
import prisma from "./prisma";

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
        ProjectCount: "0",
        StorageSize: "0",
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
  console.log(user);
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

export const updateUserProjectCount = async (id, ProjectCount) => {
  const user = await prisma.UserInfo.update({
    where: { id },
    data: {
      ProjectCount: ProjectCount,
    },
  });

  return {
    status: true,
    result: user,
  };
};

export const updateUserStorageSize = async (id, StorageSize) => {
  const user = await prisma.UserInfo.update({
    where: { id },
    data: {
      StorageSize: StorageSize,
    },
  });

  return {
    status: true,
    result: user,
  };
};
