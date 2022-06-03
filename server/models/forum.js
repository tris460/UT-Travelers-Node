const mongoose = require('mongoose');
const { Schema } = mongoose;

const ForumSchema = new Schema({
    _idQuestion: { type: String, required: true },
    strStatus: { type: String, required: true},
    arrAnswers: { type: Array, required: false },
    strTopic: { type: String, required: true },
    strQuestion: { type: String, required: true },
    dateDate: { type: Date, required: true },
    idUser: { type: String, required: false },
});

module.exports = mongoose.model('Forum', ForumSchema, 'forum');