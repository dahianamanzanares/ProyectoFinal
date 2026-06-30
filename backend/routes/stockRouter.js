const express = require("express");
const multer = require("multer");
const path = require("path");
const Stock = require("../models/Stock");

const stockRouter = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/uploads'));
  },
  filename: function (req, file, cb) {
   
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// 3. Rutas GET
stockRouter.get("/", async (req, res) => {
  try {
    const items = await Stock.findAll();
    res.json(items);
  } catch (err) {
    res.json("No se pudo obtener el producto");
  }
});

stockRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const StockById = await Stock.findByPk(id);
    res.json(StockById);
  } catch (err) {
    res.json("Error al obtener el producto por ID");
  }
});


stockRouter.post("/", upload.single('image'), async (req, res) => {
  try {
    const { name, description, price } = req.body;
    
    const image = req.file ? req.file.filename : null; 

    const newStock = await Stock.create({ name, description, price, image });
    res.json(newStock);
  } catch (err) {
    console.error(err);
    res.json("Error al crear el producto");
  }
});

stockRouter.put("/:id", upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;
    
    // Si hay una nueva imagen, la guardamos. Si no, mantenemos lo que había.
    const updateData = { ...req.body };
    if (req.file) {
      updateData.image = req.file.filename;
    }

    await Stock.update(updateData, { where: { id: id } });
    const stockById = await Stock.findByPk(id);
    res.json(stockById);
  } catch (err) {
    res.json("Error al actualizar el producto");
  }
});
stockRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Stock.destroy({ where: { id } });
    res.json("Se elimino el producto.");
  } catch (err) {
    res.json("Error al eliminar el producto por ID");
  }
});

// 7. Un solo export al final
module.exports = stockRouter;