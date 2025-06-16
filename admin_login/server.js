require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const adminLoginRoutes = require("./routers/AdminRoutes");

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

if (!MONGO_URI) {
  console.log("Database URI is not found in env file.");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDb Connected.");
  })
  .catch((err) => {
    console.log("Something went wrong");
    process.exit(1);
  });

app.use("/admin/jobPortal", adminLoginRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
