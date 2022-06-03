const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentariesSchema = new Schema({
    _idCommentary: { type: String, required: true },
    strCommentary: { type: String, required: true },
    dateDate: { type: Date, required: true }
});

module.exports = mongoose.model('Commentaries', CommentariesSchema, 'commentaries');