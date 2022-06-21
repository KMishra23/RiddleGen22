const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const riddleCaptchaSchema = new Schema({
    // SrNum: { type: String, required: true },
    Riddle_ID: {type: String, required: true},
    Captcha_Text: {type: String, required: true},
    Concept: {type: String, required: true},
    Truth_Value: {type: Boolean, required: true},
}, {
    timestamps: true,
})

const RiddleCaptcha = mongoose.model('RiddleCaptcha', riddleCaptchaSchema);

module.exports = RiddleCaptcha;