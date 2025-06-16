require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const adminLoginRoutes = require("./routers/AdminRoutes");
const JobAddRouters = require("./routers/AdminJobRoutes");
const UserLoginRouter = require("./routers/UserRouter");

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
app.use("/admin/jobPortal", JobAddRouters);
app.use("/user/jobPortal", UserLoginRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
