const express = require("express");
const sequelize = require("./config/db");
const User = require("./models/User");
const Stock = require("./models/Stock");
const stockRouter = require("./routes/stockRouter");
const userRouter = require("./routes/userRouter");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/stock", stockRouter);
app.use("/api/users", userRouter);

async function main() {
  await sequelize.sync({ force: true });
  console.log("Se vincularon las tablas.");
  app.listen(8000, () =>
    console.log("Server online on port http://localhost:8000"),
  );
}

main();