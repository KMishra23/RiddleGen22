const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const riddleSchema = new Schema({
    // SrNum: { type: String, required: true },
    Riddle_Text: { type: String, required: true },
    Difficulty_Level: { type: String, required: true },
    Hints: { type: String, required: false },
    Concept: { type: String, required: true },
}, {
    timestamps: true,
})

const Riddle = mongoose.model('Riddle', riddleSchema);

module.exports = Riddle;