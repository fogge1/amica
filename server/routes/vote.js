const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const { StreamingSite } = require('../models/streamingSite.js')

router.post('/', async (req, res) => {
    const streamingSite = new StreamingSite({
      name: req.body.name,
      votes: 0,
    });
  
    await streamingSite.save();
  
    res.send(streamingSite)
});

router.put('/:siteName', async (req, res) => {
  const site = await StreamingSite.findOne({name: req.params.siteName})
  console.log(site)

  const streamingSite = await StreamingSite.findByIdAndUpdate(site.id, {votes: site.votes+1})

  res.send(streamingSite)
})

module.exports = router; 