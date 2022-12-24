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

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Routes
app.use("/api/user", userRoutes);
app.use("/api/event", eventRouts);

// console.log(process.env.REACT_APP_API_UR);

// const corsOptions = {
//   origin: process.env.REACT_APP_API_UR,
//   credentials: true,
//   allowedHeaders: ["sessionId", "Content-Type"],
//   exposedHeaders: ["sessionId"],
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   preflightContinue: false,
// };

// app.use(function (req, res, next) {
//   //Enabling CORS
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization"
//   );
//   next();
// });
// app.use(function (req, res, next) {
//   //Enabling CORS
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization"
//   );
//   next();
// });

//jwt
app.use("*", checkUser);
app.get("/jwt", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

// Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App is runing on ${port}`);
});
