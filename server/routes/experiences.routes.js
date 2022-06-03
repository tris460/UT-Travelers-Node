const express = require('express');
const router = express.Router();

const experiencesCtrl = require('../controllers/experiences.controller');

router.get('/', experiencesCtrl.getExperiences);
router.post('/', experiencesCtrl.createExperience);
router.get('/:id', experiencesCtrl.getExperience);
router.put('/:id', experiencesCtrl.editExperience);
router.delete('/:id', experiencesCtrl.deleteExperience);

module.exports = router;