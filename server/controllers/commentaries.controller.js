const commentary = require('../models/commentaries');
const commentaryCtrl = {};


commentaryCtrl.getCommentaries = async (req, res) => {
    const comment = await commentary.find();
    res.json(comment);
};

commentaryCtrl.createCommentary = async (req,res) => {
    const newCommentary = new commentary({
        idUser: req.body.idUser,
        strDate: req.body.strDate,
        strName: req.body.strName,
        arrSymptoms: req.body.arrSymptoms,
        intStatus: req.body.intStatus,
        strNotes : req.body.strNotes,
    });
    await newCommentary.save();
    res.json({
       'status' : 'Commentary saved'
    });
    console.log(req.body);
};

commentaryCtrl.getCommentary = async (req,res) => {
    const find = await commentary.findById(req.params.id);
    res.json(find);
};

commentaryCtrl.editCommentary = async (req,res) => {
    const { id } = req.params;
    const newCommentary = {
        idUser: req.body.idUser,
        strDate: req.body.strDate,
        strName: req.body.strName,
        arrSymptoms: req.body.arrSymptoms,
        intStatus: req.body.intStatus,
        strNotes : req.body.strNotes,
    }
    //(id, new object, if it doesn't exist create it)
    await commentary.findByIdAndUpdate(id, {$set: newCommentary}, {new:true});
    res.json({
        status: 'Commentary updated'
    });
};

commentaryCtrl.deleteCommentary = async (req,res) => {
    await commentary.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Commentary deleted'
    });
};

module.exports = commentaryCtrl;