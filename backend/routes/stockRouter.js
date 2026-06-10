const express = require("express");
const { Router } = require("express");
const Stock = require("../models/Stock");

const stockRouter = express.Router();

stockRouter.get("/", async (req, res) => {
  const items = await Stock.findAll();
  res.json(items);
});
stockRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const StockById = await Stock.findByPk(id);
  res.json(StockById);
});
stockRouter.post("/", async (req, res) => {
  const { name, description, price } = req.body;
  const newStock = await Stock.create({ name, description, price });
  res.json(newStock);
});
stockRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  await Stock.update(req.body, { where: { id: id } }) ;
   const stockById = await Stock.findByPk(id);
  res.json(stockById);
});
stockRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const userById = await Stock.destroy({ where: { id } });
  res.json("Se elimino el cliente.");
});
module.exports = stockRouter;