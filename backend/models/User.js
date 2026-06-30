const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class User extends Model {}

User.init(
  {
   username: DataTypes.STRING,
   email: DataTypes.STRING,
   password: DataTypes.STRING,
  },
  { sequelize, modelName: "User" },
);


module.exports = User;