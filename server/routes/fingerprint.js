const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const { Fingerprint } = require('../models/fingerprint.js')
 
router.get('/:visitorId', async (req, res) => {
    if (await Fingerprint.findOne({fingerprint: req.params.visitorId})) return res.send(true)
    res.send(false)
    
});

module.exports = router; 