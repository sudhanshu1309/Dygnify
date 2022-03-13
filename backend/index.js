const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
var cors = require("cors");

const port = 8000;
const uri = "mongodb://localhost:27017/dygnify";

//routes
const userRoutes = require("./routes/personal");
const businessRoutes = require("./routes/business");
const loanRoutes = require("./routes/loan");

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello there! Welcome to the root directory!");
});

app.listen(port, () => {
  console.log(`This app is listening at http:localhost:${port}`);
});

//DB connection
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((e) => {
    console.log("DB Connection Failed " + e);
  });

//middleswares
app.use("/api", userRoutes);
app.use("/api", businessRoutes);
app.use("/api", loanRoutes);
