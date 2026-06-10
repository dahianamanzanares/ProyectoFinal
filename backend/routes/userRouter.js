const express = require("express");
const { Router } = require("express");
const User = require("../models/User");

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  const items = await User.findAll();
  res.json(items);
});
userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const userById = await User.findByPk(id);
  res.json(userById);
});
userRouter.post("/", async (req, res) => {
  const { userName, email, password } = req.body;
  const newUser = await User.create({ userName, email, password });
  res.json(newUser);
});
userRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  await User.update(req.body, { where: { id: id } }) ;
   const userById = await User.findByPk(id);
  res.json(userById);
});
userRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const userById = await User.destroy({ where: { id } });
  res.json("Se elimino el cliente.");
});
module.exports = userRouter;