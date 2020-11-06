import mongoose from 'mongoose';

const { Schema } = mongoose;

// - Title - text
// - Description -text
// - Comments - text
// - Rating - scale of 1-5 stars
// - Image - text URL
// - Start Date - Datetime
// - End Date - Datetime
// - Latitude - number
// - Longitude - number
// - Created At - Datetime
// - Updated At - Datetime

const requiredNumber = {
  type: Number,
  require: true,
};

const defaultRequiredDate = {
  type: Date,
  default: Date.now,
  required: true,
};

const logEntrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  comments: String,
  image: String,
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  latitude: requiredNumber,
  longitude: requiredNumber,
  created_at: defaultRequiredDate,
  updated_at: defaultRequiredDate,
});
