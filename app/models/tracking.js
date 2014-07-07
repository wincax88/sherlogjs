var mongoose = require('mongoose');

var trackingSchema = mongoose.Schema({
  tracking_data : Object,
  environment: String,
  user_agent: String,
  referrer: String,
  created_at: Date,
  type: Number
}, { collection: 'tracking' });

module.exports = mongoose.model('Tracking', trackingSchema);
