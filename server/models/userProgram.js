const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserProgramSchema = new Schema({
    idUser: { type: String, required: true },
    idProgram: { type: String, required: true },
    strStatus: { type: String, required: true },
    dateDate: { type: String, required: true }
});

module.exports = mongoose.model('UserProgram', UserProgramSchema, 'userProgram');