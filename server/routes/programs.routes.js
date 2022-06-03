const express = require('express');
const router = express.Router();

const programsCtrl = require('../controllers/programs.controller');

router.get('/', programsCtrl.getPrograms);
router.post('/', programsCtrl.createProgram);
router.get('/:id', programsCtrl.getProgram);
router.put('/:id', programsCtrl.editProgram);
router.delete('/:id', programsCtrl.deleteProgram);

module.exports = router;