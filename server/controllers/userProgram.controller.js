const userProgram = require('../models/userProgram');
const userProgramCtrl = {};

userProgramCtrl.getUserPrograms = async (req, res) => {
    const userPrograms = await userProgram.find();
    res.json(userPrograms);
};

userProgramCtrl.createUserProgram = async (req,res) => {
    const newUserProgram = new userProgram({
        _id: req.body._id,
        idUser: req.body.idUser,
        idProgram: req.body.idProgram,
        strStatus: req.body.strStatus,
        dateDate: req.body.dateDate
    });
    await newUserProgram.save();
    res.json({
       'status' : 'UserProgram saved'
    });
    console.log(req.body);
};

userProgramCtrl.getUserProgram = async (req,res) => {
    const u = await userProgram.findById(req.params.id);
    res.json(u);
};

userProgramCtrl.editUserProgram = async (req,res) => {
    const { id } = req.params;
    const newUserProgram = {
        idUser: req.body.idUser,
        idProgram: req.body.idProgram,
        strStatus: req.body.strStatus,
        dateDate: req.body.dateDate
    }
    //(id, new object, if it doesn't exist create it)
    await userProgram.findByIdAndUpdate(id, {$set: newUserProgram}, {new:true});
    res.json({
        status: 'UserProgram updated'
    });
};

userProgramCtrl.deleteUserProgram = async (req,res) => {
    await userProgram.findByIdAndRemove(req.params.id);
    res.json({
        status: 'UserProgram deleted'
    });
};

module.exports = userProgramCtrl;