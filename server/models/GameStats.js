const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameStatSchema = new Schema({
  winner: {
    type: String,
    required: true,
  },
  board: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = GameStat = mongoose.model("gameStat", GameStatSchema);
