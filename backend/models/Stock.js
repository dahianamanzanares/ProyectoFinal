const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Stock extends Model {}

Stock.init(
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
  },
  { sequelize, modelName: "Stock" },
);


module.exports = Stock;