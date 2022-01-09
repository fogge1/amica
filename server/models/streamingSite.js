const mongoose = require('mongoose');

const StreamingSite = mongoose.model('streamingSites', new mongoose.Schema({
    votes: {
        type: Number,
        default: 0,
    },
    name: {
        type: String,
        required: true,
    },
    drama: {
        type: Number,
        default: 0,
    },
    comedy: {
        type: Number,
        default: 0,
    },
    romance: {
        type: Number,
        default: 0,
    },
    horror: {
        type: Number,
        default: 0,
    },
    action: {
        type: Number,
        default: 0,
    },
    scifi: {
        type: Number,
        default: 0,
    },
}));

exports.StreamingSite = StreamingSite; 