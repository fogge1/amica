const mongoose = require('mongoose');

const Fingerprint = mongoose.model('fingerprint', new mongoose.Schema({ 
    fingerprint: {
        type: String,
        required: true,
    }
}));

exports.Fingerprint = Fingerprint; 