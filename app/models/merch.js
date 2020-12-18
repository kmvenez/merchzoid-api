const mongoose = require('mongoose')

const merchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Merch', merchSchema)

// This is not done.  Contemplating and working on adding an image upload feature and what is potentially the best 'type' for price (string vs. numeral)
