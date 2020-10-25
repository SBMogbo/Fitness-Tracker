const router = require("express").Router();
const workout = require("../models/workoutModel.js");

router.post("/api/workouts", (req, res) => {
  workout.create({})
    .then(dbworkout =>res.json(dbwworkout))
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  workout.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.post("/api/workouts/range", (req, res) => {
  workout.create()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises:body } },
    { new: true,runValidators: true }
  )

    .then(data => res.json(data))
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
