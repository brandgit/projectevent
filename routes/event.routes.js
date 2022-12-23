const router = require("express").Router();
const eventController = require("../controllers/event.controller");

router.get("/", eventController.getAllEvents);
router.post("/createEvent", eventController.createEvent);

module.exports = router;
