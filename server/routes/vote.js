const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const { StreamingSite } = require('../models/streamingSite.js')
const { Fingerpint, Fingerprint } = require('../models/fingerprint.js')
 
router.post('/', async (req, res) => {
    

    const streamingSite = new StreamingSite({
      name: req.body.name,
    });
  
    await streamingSite.save();

    
  
    res.send(streamingSite)
});

router.put('/:siteName', async (req, res) => {
  
  if (await Fingerprint.findOne({fingerprint: req.body.fingerprint})) return res.status(400).send("Already voted")

  const site = await StreamingSite.findOne({name: req.params.siteName})
  const streamingSite = await StreamingSite.findByIdAndUpdate(site.id, {votes: site.votes+1})

  const fingerprint = new Fingerprint({
    fingerprint: req.body.fingerprint
  })

  await fingerprint.save()
  console.log(fingerprint)

  res.send(streamingSite)
})

module.exports = router; 