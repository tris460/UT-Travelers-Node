const mongoose = require('mongoose');
const { Schema } = mongoose;

const ForumSchema = new Schema({
    strStatus: { type: String, required: true},
    arrAnswers: { type: Array, required: false },
    strTopic: { type: String, required: true },
    strQuestion: { type: String, required: true },
    dateDate: { type: String, required: true },
    idUser: { type: String, required: false },
});

module.exports = mongoose.model('Forum', ForumSchema, 'forum');