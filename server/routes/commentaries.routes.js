const express = require('express');
const router = express.Router();

const commentariesCtrl = require('../controllers/commentaries.controller');

router.get('/', commentariesCtrl.getCommentaries);
router.post('/', commentariesCtrl.createCommentary);
router.get('/:id', commentariesCtrl.getCommentary);
router.put('/:id', commentariesCtrl.editCommentary);
router.delete('/:id', commentariesCtrl.deleteCommentary);

module.exports = router;
