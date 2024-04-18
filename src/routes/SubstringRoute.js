const express = require('express');
const SubstringController = require('../controllers/SubstringController');

const router = express.Router();

router.post('/ejercicio1', SubstringController.createSubstring);

module.exports = router;