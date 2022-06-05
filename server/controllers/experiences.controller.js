const experience = require('../models/experiences');
const experiencesCtrl = {};

experiencesCtrl.getExperiences = async (req, res) => {
    const exp = await experience.find();
    res.json(exp);
};

experiencesCtrl.createExperience = async (req,res) => {
    const newExperience = new experience({
        _idExperience: req.body._idExperience,
        boolStatus: req.body.boolStatus,
        strDescription: req.body.strDescription,
        strName: req.body.strName,
        strEmail: req.body.strEmail,
        strPhone: req.body.strPhone,
        strPhoto: req.body.strPhoto
    });
    await newExperience.save();
    res.json({
       'status' : 'Experience saved'
    });
    console.log(req.body);
};

experiencesCtrl.getExperience = async (req,res) => {
    const find = await experience.findById(req.params.id);
    res.json(find);
};

experiencesCtrl.editExperience = async (req,res) => {
    const { id } = req.params;
    const newExperience = {
        _idExperience: req.body._idExperience,
        boolStatus: req.body.boolStatus,
        strDescription: req.body.strDescription,
        strName: req.body.strName,
        strEmail: req.body.strEmail,
        strPhone: req.body.strPhone,
        strPhoto: req.body.strPhoto
    }
    //(id, new object, if it doesn't exist create it)
    await experience.findByIdAndUpdate(id, {$set: newExperience}, {new:true});
    res.json({
        status: 'Experience updated'
    });
};

experiencesCtrl.deleteExperience = async (req,res) => {
    await experience.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Experience deleted'
    });
};

module.exports = experiencesCtrl;