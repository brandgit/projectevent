const UserModel = require("../models/users");
const objectID = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-mdp");
  res.status(200).json(users);
};

module.exports.userInfo = (req, res) => {
  if (!objectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown : " + err);
  }).select("-mdp");
};


module.exports.updateUser = async (req, res) => {
  if (!objectID.isValid(req.params.id))
    return res.status(400).send("ID : " + req.params.id + " unknown");

  try {
    const infosUpdare = await UserModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          address: req.body.address,
          ville: req.body.ville,
          pays: req.body.pays,
          cp: req.body.cp,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    ).select("-mdp");
    res.json(infosUpdare);
    console.log(infosUpdare);
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports.deleteUser = async (req, res) => {
  if (!objectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await UserModel.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: "Successfully deleted. " });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
