const mongoose = require('mongoose')

// Create Schema
const ScoreSchema = new mongoose.Schema(
  {
    score: {
      type: Number,
      default: 0,
    },
    user_id: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { strict: false }
)


module.exports = Score = mongoose.model('scores', ScoreSchema)
