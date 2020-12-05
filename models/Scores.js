const mongoose = require("mongoose");

const UserScores = new mongoose.Schema(
    {
        score: {
            type: Number
        }
    },
    { strict: false }
);

module.exports = User = mongoose.model("users", UserScores)