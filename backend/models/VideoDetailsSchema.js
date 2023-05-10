const mongoose = require('mongoose');

const uploadSchema = mongoose.Schema({
  upload_title: { type: String, required: true },
  video_path: { type: String, required: true },
});

module.exports = mongoose.model('Upload', uploadSchema);