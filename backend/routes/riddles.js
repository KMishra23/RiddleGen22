const router = require('express').Router();
let Riddle = require('../models/riddle.model');

router.route('/').get((req, res) => {
  Riddle.find()
    .then(riddles => res.json(riddles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const Riddle_Text = req.body.Riddle_Text
    const Difficulty_Level = req.body.Difficulty_Level
    const Hints = req.body.Hints
    const Concept = req.body.Concept

    const newRiddle = new Riddle({
        Riddle_Text,
        Difficulty_Level,
        Hints,
        Concept,
    });

    newRiddle.save()
    .then(() => res.json('Riddle Added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

// router.route('/')

module.exports = router