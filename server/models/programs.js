const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProgramsSchema = new Schema({
    boolStatus: { type: Boolean, required: true },
    strName: { type: String, required: true },
    dateStart: { type: String, required: true },
    dateEnd: { type: String, required: true },
    strDescription: { type: String, required: false },
    anyAnnouncement: { type: String, required: false },
    strUrl: { type: String, required: false },
    strImage: { type: String, required: false}
});

module.exports = mongoose.model('Programs', ProgramsSchema, 'programs');