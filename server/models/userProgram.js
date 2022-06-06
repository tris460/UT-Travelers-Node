const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserProgramSchema = new Schema({
    _id: { type: String, required: true },
    idUser: { type: String, required: true },
    idProgram: { type: String, required: true },
    strStatus: { type: String, required: true },
    dateDate: { type: Date, required: true }
});

module.exports = mongoose.model('UserProgram', UserProgramSchema, 'userProgram');