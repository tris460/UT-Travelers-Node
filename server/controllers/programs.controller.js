const program = require('../models/program');
const programsCtrl = {};

programsCtrl.getPrograms = async (req, res) => {
    const programs = await program.find();
    res.json(programs);
};

programsCtrl.createProgram = async (req,res) => {
    const newQuestion = new program({
        _idProgram: req.body._idProgram,
        boolStatus: req.body.boolStatus,
        strName: req.body.strName,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        strDescription: req.body.strDescription,
        anyAnnouncement: req.body.anyAnnouncement,
        strUrl: req.body.strUrl,
        strImage: req.body.strImage
    });
    await newQuestion.save();
    res.json({
       'status' : 'Program saved'
    });
    console.log(req.body);
};

programsCtrl.getProgram = async (req,res) => {
    const prog = await program.findById(req.params.id);
    res.json(prog);
};

programsCtrl.editProgram = async (req,res) => {
    const { id } = req.params;
    const newProgram = {
        _idQuestion: req.body._idQuestion,
        strStatus: req.body.strStatus,
        arrAnswers: req.body.arrAnswers,
        strTopic: req.body.strTopic,
        strQuestion: req.body.strQuestion,
        dateDate: req.body.dateDate,
        idUser: req.body.idUser
    }
    //(id, new object, if it doesn't exist create it)
    await program.findByIdAndUpdate(id, {$set: newProgram}, {new:true});
    res.json({
        status: 'Program updated'
    });
};

programsCtrl.deleteProgram = async (req,res) => {
    await program.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Program deleted'
    });
};

module.exports = programsCtrl;