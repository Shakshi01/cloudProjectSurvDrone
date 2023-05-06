const mongoose = require('mongoose');

const CoordsSchema = new mongoose.Schema({
    lat: String,
    lng: String
  });

const planSchema = new mongoose.Schema({
    MissionType: {
        type: String,
        required: true
    },
    Location: {
        type: String,
    },
    FlightPlanCoordinates: {type:[CoordsSchema], default:undefined},
    FlightHeight: {
        type: Number,
        required: true
    },
    Alerts: {
        type: Array,
    }
});


module.exports = mongoose.model('planData', planSchema);