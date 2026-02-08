const express = require('express');
const router = express.Router();

const { getCountries } = require('../controllers/countries.controller');

router.get('/countries', getCountries);

module.exports = router;
