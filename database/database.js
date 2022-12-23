
const URL = process.env.MONGO_URI;

const mongoose = require("mongoose");
module.exports = (app) => {
  (async () => {
    try {
      await mongoose.connect(URL);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.log(error.message);
    }
  })();
};
