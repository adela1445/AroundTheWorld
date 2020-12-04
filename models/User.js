const mongoose = require('mongoose')

// Create Schema
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [`/.+\@.+\..+/`, "Please enter a valid e-mail address"]
    },
    password: {
      type: String,
      validate:[({length})=> length>=8, "Password should be at least 8 characters long"]
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { strict: false }
)


module.exports = User = mongoose.model('users', UserSchema)
