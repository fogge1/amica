const mongoose = require('mongoose');

const StreamingSite = mongoose.model('streamingSites', new mongoose.Schema({
    votes: {
        type: Number,
        default: 0,
    },
    name: {
        type: String,
        required: true,
    }
}));

exports.StreamingSite = StreamingSite; 