const express = require("express");
const { Router } = require("express");
const Stock = require("../models/Stock");

const stockRouter = express.Router();

stockRouter.get("/", async (req, res) => {
  try{
  const items = await Stock.findAll();
  res.json(items)
}catch (err) {
  res.json("No se pudo obtener el producto")
};

});
stockRouter.get("/:id", async (req, res) => {
  try{
  const { id } = req.params;
  const StockById = await Stock.findByPk(id);
  res.json(StockById);
}catch (err){
  res.json("Error al obtener el prosucto por ID")
}
});
stockRouter.post("/", async (req, res) => {
  try{
  const { name, description, price } = req.body;
  const newStock = await Stock.create({ name, description, price });
  res.json(newStock);
}catch (err){
  res.json("Error al crear el producto")
}
});
stockRouter.put("/:id", async (req, res) => {
  try{
  const { id } = req.params;
  await Stock.update(req.body, { where: { id: id } }) ;
   const stockById = await Stock.findByPk(id);
  res.json(stockById);
}catch (err){
  res.json("Error al obtener el prosucto por ID")
}});
stockRouter.delete("/:id", async (req, res) => {
  try {
  const { id } = req.params;
  const userById = await Stock.destroy({ where: { id } });
  res.json("Se elimino el cliente.");
  }catch (err){
  res.json("Error al eliminar el prosucto por ID")
  }
});
module.exports = stockRouter;