const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  show: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Show',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Review', reviewSchema)
