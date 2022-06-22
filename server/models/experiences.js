const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExperiencesSchema = new Schema({
    boolStatus: { type: Boolean, required: true},
    strDescription: { type: String, required: true },
    strName: { type: String, required: true },
    strEmail: { type: String, required: true },
    strPhone: { type: String, required: false },
    strPhoto: { type: String, required: true }
});

module.exports = mongoose.model('Experiences', ExperiencesSchema, 'experiences');