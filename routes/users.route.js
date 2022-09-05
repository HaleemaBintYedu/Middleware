const router = require("express").Router;
const {createUser,updateUser,deleteUser, getUsers} = require("../controllers/users.controller");

const userRouter = router();

userRouter.router("./").get(getUsers).post(createUser);
userRouter.router("./:userId").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter

