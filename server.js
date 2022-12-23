
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
require("dotenv").config({ path: "./config/.env" });
const userRoutes = require("./routes/user.routes");
const eventRouts = require("./routes/event.routes");
const cookieParser = require("cookie-parser");

const app = express();



mongoose.set("strictQuery", false);
require("./database/database")(app);
const { checkUser, requireAuth } = require("./middleware/auth.middleware");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(cors());

//jwt
app.get("*", checkUser);
app.get("/jwt", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});
// Routes
app.use("/api/user", userRoutes);
app.use("/api/event", eventRouts);

// Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App is runing on ${port}`);
});
