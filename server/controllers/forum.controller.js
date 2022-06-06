const forum = require('../models/forum');
const forumCtrl = {};

forumCtrl.getQuestions = async (req, res) => {
    const questions = await forum.find();
    res.json(questions);
};

forumCtrl.createQuestion = async (req,res) => {
    const newQuestion = new forum({
        _id: req.body._id,
        strStatus: req.body.strStatus,
        arrAnswers: req.body.arrAnswers,
        strTopic: req.body.strTopic,
        strQuestion: req.body.strQuestion,
        dateDate: req.body.dateDate,
        idUser: req.body.idUser
    });
    await newQuestion.save();
    res.json({
       'status' : 'Question saved'
    });
    console.log(req.body);
};

forumCtrl.getQuestion = async (req,res) => {
    const question = await forum.findById(req.params.id);
    res.json(question);
};

forumCtrl.editQuestion = async (req,res) => {
    const { id } = req.params;
    const newQuestion = {
        _id: req.body._id,
        strStatus: req.body.strStatus,
        arrAnswers: req.body.arrAnswers,
        strTopic: req.body.strTopic,
        strQuestion: req.body.strQuestion,
        dateDate: req.body.dateDate,
        idUser: req.body.idUser
    }
    //(id, new object, if it doesn't exist create it)
    await forum.findByIdAndUpdate(id, {$set: newQuestion}, {new:true});
    res.json({
        status: 'Question updated'
    });
};

forumCtrl.deleteQuestion = async (req,res) => {
    await forum.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Question deleted'
    });
};

module.exports = forumCtrl;