const commentary = require('../models/commentaries');
const commentariesCtrl = {};


commentariesCtrl.getCommentaries = async (req, res) => {
    const comment = await commentary.find();
    res.json(comment);
};

commentariesCtrl.createCommentary = async (req,res) => {
    const newCommentary = new commentary({
        _idCommentary: req.body._idCommentary,
        strCommentary: req.body.strCommentary,
        dateDate: req.body.dateDate
    });
    await newCommentary.save();
    res.json({
       'status' : 'Commentary saved'
    });
    console.log(req.body);
};

commentariesCtrl.getCommentary = async (req,res) => {
    const find = await commentary.findById(req.params.id);
    res.json(find);
};

commentariesCtrl.editCommentary = async (req,res) => {
    const { id } = req.params;
    const newCommentary = {
        _idCommentary: req.body._idCommentary,
        strCommentary: req.body.strCommentary,
        dateDate: req.body.dateDate
    }
    //(id, new object, if it doesn't exist create it)
    await commentary.findByIdAndUpdate(id, {$set: newCommentary}, {new:true});
    res.json({
        status: 'Commentary updated'
    });
};

commentariesCtrl.deleteCommentary = async (req,res) => {
    await commentary.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Commentary deleted'
    });
};

module.exports = commentariesCtrl;