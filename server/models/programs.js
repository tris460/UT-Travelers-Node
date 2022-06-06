const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProgramsSchema = new Schema({
    _id: { type: String, required: true },
    boolStatus: { type: Boolean, required: true },
    strName: { type: String, required: true },
    dateStart: { type: Date, required: true },
    dateEnd: { type: Date, required: true },
    strDescription: { type: String, required: false },
    anyAnnouncement: { type: String, required: false },
    strUrl: { type: String, required: false },
    strImage: { type: String, required: false}
});

module.exports = mongoose.model('Programs', ProgramsSchema, 'programs');