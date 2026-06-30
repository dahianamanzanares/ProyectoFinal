const express = require("express");
const sequelize = require("./config/db");
const User = require("./models/User");
const Stock = require("./models/Stock");
const stockRouter = require("./routes/stockRouter");
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");
const cors = require('cors');
const app = express();
const path = require("path");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/stock", stockRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.use("/api/stock", stockRouter);
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));


async function main() {
  await sequelize.sync();
  console.log("Se vincularon las tablas.");
  app.listen(8000, () =>
    console.log("Server online on port http://localhost:8000"),
  );
}

main();