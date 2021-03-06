const program = require('../models/programs');
const programsCtrl = {};

programsCtrl.getPrograms = async (req, res) => {
    const programs = await program.find();
    res.json(programs);
};

programsCtrl.createProgram = async (req,res) => {
    const newProgram = new program({
        _id: req.body._id,
        boolStatus: req.body.boolStatus,
        strName: req.body.strName,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        strDescription: req.body.strDescription,
        anyAnnouncement: req.body.anyAnnouncement,
        strUrl: req.body.strUrl,
        strImage: req.body.strImage
    });
    await newProgram.save();
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
        boolStatus: req.body.boolStatus,
        strName: req.body.strName,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        strDescription: req.body.strDescription,
        anyAnnouncement: req.body.anyAnnouncement,
        strUrl: req.body.strUrl,
        strImage: req.body.strImage
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