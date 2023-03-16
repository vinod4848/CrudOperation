const express = require("express");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://lastuser:H6xTOFcnE1cAj0kv@cluster0.z6zy1tq.mongodb.net/login";

const app = express();

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

const userRouter = require("./routes/user");
const productRouter = require("./routes/product");

app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(4000, () => {
  console.log("Server started");
});
