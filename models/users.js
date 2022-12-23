const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  nom: String,
  prenom: String,
  address: String,
  ville: String,
  pays: String,
  cp: String,
  mail: String,
  mdp: String,
});

// Cryptage du mdp
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.mdp = await bcrypt.hash(this.mdp, salt);
  next();
});

userSchema.statics.login = async function (mail, mdp) {
  const user = await this.findOne({ mail });
  if (user){
    const auth = await bcrypt.compare(mdp, user.mdp);
    if (auth) {
      return user;
    }
    throw Error("Incorrect password");
  }
  throw Error("Incorrect email");
};

module.exports = mongoose.model("User", userSchema);
