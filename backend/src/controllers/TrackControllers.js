const models = require("../models");

const browse = (req, res) => {
  models.track
    .findAll()
    .then(([tracks]) => {
      res.send(tracks);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};
