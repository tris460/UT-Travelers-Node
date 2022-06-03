const express = require('express');
const router = express.Router();

const userProgramCtrl = require('../controllers/userProgram.controller');

router.get('/', userProgramCtrl.getUserPrograms);
router.post('/', userProgramCtrl.createUserProgram);
router.get('/:id', userProgramCtrl.getUserProgram);
router.put('/:id', userProgramCtrl.editUserProgram);
router.delete('/:id', userProgramCtrl.deleteUserProgram);

module.exports = router;