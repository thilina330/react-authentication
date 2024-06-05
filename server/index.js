const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/authRoute");

const app = express();

// 01) Middlewares
app.use(express.json());
app.use(cors());

// 02) Route
app.use("/api/auth", authRoute);

// 03) MongoDB connectio
mongoose
  .connect("mongodb://127.0.0.1:27017/authentication")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.error("mongodb not connected", error);
  });

// 04) Global error handler
app.use((err, req, res, next) => {
  err.statuCode = err.statuCode || 500;
  err.status = err.status || "error";

  res.status(err.statuCode).json({
    status: err.status,
    message: err.message,
  });
});

// 05) Server run
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
