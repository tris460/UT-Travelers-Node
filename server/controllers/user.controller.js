const user = require('../models/user');
const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
    const users = await user.find();
    res.json(users);
};

userCtrl.createUser = async (req,res) => {
    const newUser = new user({
        _id: req.body._id,
        boolStatus: req.body.boolStatus,
        strRol: req.body.strRol,
        strName: req.body.strName,
        strLastName: req.body.strLastName,
        dateBirth: req.body.dateBirth,
        strPhone: req.body.strPhone,
        strEmail: req.body.strEmail,
        strPassword: req.body.strPassword,
        strCareer: req.body.strCareer,
        strPhoto: req.body.strPhoto,
        arrPrograms: req.body.arrPrograms
    });
    await newUser.save();
    res.json({
       'status' : 'User saved'
    });
    console.log(req.body);
};

userCtrl.getUser = async (req,res) => {
    const u = await user.findById(req.params.id);
    res.json(u);
};

userCtrl.editUser = async (req,res) => {
    const { id } = req.params;
    const newUser = {
        _id: req.body._id,
        boolStatus: req.body.boolStatus,
        strRol: req.body.strRol,
        strName: req.body.strName,
        strLastName: req.body.strLastName,
        dateBirth: req.body.dateBirth,
        strPhone: req.body.strPhone,
        strEmail: req.body.strEmail,
        strPassword: req.body.strPassword,
        strCareer: req.body.strCareer,
        strPhoto: req.body.strPhoto,
        arrPrograms: req.body.arrPrograms
    }
    //(id, new object, if it doesn't exist create it)
    await user.findByIdAndUpdate(id, {$set: newUser}, {new:true});
    res.json({
        status: 'User updated'
    });
};

userCtrl.deleteUser = async (req,res) => {
    await user.findByIdAndRemove(req.params.id);
    res.json({
        status: 'User deleted'
    });
};

module.exports = userCtrl;