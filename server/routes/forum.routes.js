const express = require('express');
const router = express.Router();

const forumCtrl = require('../controllers/forum.controller');

router.get('/', forumCtrl.getQuestions);
router.post('/', forumCtrl.createQuestion);
router.get('/:id', forumCtrl.getQuestion);
router.put('/:id', forumCtrl.editQuestion);
router.delete('/:id', forumCtrl.deleteQuestion);

module.exports = router;