const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    MissionType: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    FlightPlanCoordinates: {
        type: Array,
        required: false
    },
    FlightHeight: {
        type: Number,
        required: true
    },
    Alerts: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('planData', planSchema);