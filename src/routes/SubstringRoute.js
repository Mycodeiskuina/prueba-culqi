const express = require('express');
const SubstringController = require('../controllers/SubstringController');

const router = express.Router();

router.get('/ejercicio1', SubstringController.getSubstring);
router.post('/ejercicio1', SubstringController.createSubstring);

module.exports = router;