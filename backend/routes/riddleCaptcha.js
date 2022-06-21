const router = require('express').Router();
let RiddleCaptcha = require('../models/riddleCaptcha.model');

router.route('/').get((req, res) => {
  RiddleCaptcha.find()
    .then(riddlesCaptcha => res.json(riddlesCaptcha))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const Riddle_ID = req.body.Riddle_ID
    const Captcha_Text = req.body.Captcha_Text
    const Concept = req.body.Concept
    const Truth_Value = req.body.Truth_Value

    const newRiddleCaptcha = new RiddleCaptcha({
        Riddle_ID,
        Captcha_Text,
        Concept,
        Truth_Value,
    });

    newRiddleCaptcha.save()
    .then(() => res.json('Riddle Captcha Added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

// router.route('/')

module.exports = router