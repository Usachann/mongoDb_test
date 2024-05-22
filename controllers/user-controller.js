const asyncHandler = require("express-async-handler");
const prisma = require("../config/prismaConfig");

const createUser = asyncHandler(async (req, res) => {
  let { email } = req.body;
  console.log("maio", email);
  const userExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!userExists) {
    const user = await prisma.user.create({
      data: req.body,
    });
    res.status(200).send({ message: "User created!", user });
  } else {
    res
      .status(201)
      .send({ message: "User already register with this email", email });
  }
  console.log("Creating user");
});

const getAll = asyncHandler(async (req, res) => {
  const users = await prisma.user.findMany({});
  if (users.length > 0) {
    res.status(200).send(users);
  } else {
    res.status(201).send({ message: "Not users data" });
  }
});

const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).send({ message: "Missing user ID" });
    }
    const userById = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userById) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send(userById);
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = {
  createUser,
  getAll,
  getUserById,
};
