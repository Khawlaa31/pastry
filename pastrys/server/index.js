const express = require("express");
const cors = require("cors");
const { sequelize } = require("./database/models/index.js");
const PORT = 4000;
const app = express();
const router = require("./database/routers/cakeroutes.js");
const userRouter = require("./database/routers/userroutes.js");
console.log("hello");

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/cake", router);

app.get("/hello", (req, res) => {
  res.send("hemllo");
});

app.get("/hello", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(PORT, () => {
  console.log(`Server listening at  http://localhost:${PORT}`);
});
