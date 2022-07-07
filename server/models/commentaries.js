const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentariesSchema = new Schema({
    strCommentary: { type: String, required: true },
    dateDate: { type: String, required: true }
});

module.exports = mongoose.model('Commentaries', CommentariesSchema, 'commentaries');