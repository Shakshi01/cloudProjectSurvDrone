const mongoose = require('mongoose');

const mapSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    MapImage: {
        type: String, // save image as URL may change to image
        required: true
    }
})

module.exports = mongoose.model('mapData', mapSchema);