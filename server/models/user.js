const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    boolStatus: { type: Boolean, required: true},
    strRol: { type: String, required: true },
    strName: { type: String, required: true },
    strLastName: { type: String, required: true },
    dateBirth: { type: Date, required: true },
    strPhone: { type: Number, required: true },
    strEmail: { type: String, required: true },
    strPassword: { type: String, required: true },
    strCareer: { type: String, required: false },
    strPhoto: { type: String, required: false },
    arrPrograms: { type: Array, required: false }
});

module.exports = mongoose.model('User', UserSchema, 'user');