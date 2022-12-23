const EventModel = require("../models/evenements");

module.exports.getAllEvents = async (req, res) => {
  const events = await EventModel.find().select();
  res.status(200).json(events);
};

module.exports.createEvent = async (req, res) => {
  console.log(req.body);
  const { title, lieu, cover, type, prix, date, heure } = req.body;

  try {
    const event = await EventModel.create({
      title,
      lieu,
      cover,
      type,
      prix,
      date,
      heure,
    });
    res.status(201).json({ user: event._id });
  } catch (err) {
    res.status(201).send({ err });
  }
};
