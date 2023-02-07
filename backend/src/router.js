const express = require("express");

const router = express.Router();

const TrackControllers = require("./controllers/TrackControllers");
const VinylesControllers = require("./controllers/VinylesControllers");
const UsersControllers = require("./controllers/UsersControllers");

router.get("/track", TrackControllers.browse);
router.get("/vinyles", VinylesControllers.browse);
router.get("/vinyles/rand", VinylesControllers.random);
router.get("/vinyles/:id", VinylesControllers.read);
router.put("/vinyles/:id", VinylesControllers.edit);
router.post("/vinyles", VinylesControllers.add);

router.post("/login", UsersControllers.validateUser);

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
