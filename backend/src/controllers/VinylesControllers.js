const models = require("../models");

const browse = (req, res) => {
  models.vinyles
    .findAll()
    .then(([vinyles]) => {
      res.send(vinyles);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.vinyles
    .find(req.params.id)
    .then(([vinyles]) => {
      if (vinyles[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(vinyles[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// create entreprise

const add = (req, res) => {
  const vinyles = req.body;
  // TODO validations (length, format...)
  models.vinyles
    .insert(vinyles)
    .then(([result]) => {
      res
        .location(`/vinyles/${result.insertId}`)
        .status(201)
        .json({ ...vinyles, id: result.insertId });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
// edit entreprise
const edit = (req, res) => {
  const vinyles = req.body;

  // TODO validations (length, format...)

  models.vinyles
    .update(vinyles, parseInt(req.params.id, 10))
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const random = (req, res) => {
  models.vinyles
    .rand(3)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  random,
  edit,
  add,
};
