const UserModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const TS = process.env.TOKEN_SECRET;

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, TS, {
    expiresIn: maxAge,
  });
};

/* REGISTER USER */
module.exports.signUp = async (req, res) => {
  console.log(req.body);
  const { nom, prenom, address, ville, pays, cp, mail, mdp } = req.body;

  try {
    const user = await UserModel.create({
      nom,
      prenom,
      address,
      ville,
      pays,
      cp,
      mail,
      mdp,
    });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(200).send({ err });
  }
};

module.exports.signIn = async (req, res) => {
  const { mail, mdp } = req.body;

  try {
    const user = await UserModel.login(mail, mdp);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    res.status(200).json({ user: user._id });
    console.log(user._id);
    console.log(" User conected");
  } catch (err) {
    res.status(200).json({ err });
  }
};

module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  console.log(" User deconected");
  res.redirect("/");
};
