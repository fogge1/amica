const mongoose = require('mongoose');
const express = require('express');
const app = express();
const vote = require('./routes/vote.js')
const { allowCrossDomain } = require('./middleware/cors');

mongoose.connect('mongodb+srv://isakfogelberg:amicaproject@amica.ehjuk.mongodb.net/amica?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB... ' + err));


app.use(express.json());
app.use(allowCrossDomain);
app.use('/api/vote', vote)



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));