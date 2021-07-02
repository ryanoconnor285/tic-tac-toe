const express = require("express");
const router = express.Router();

const GameStat = require("../models/GameStats");

// @route GET api/gameStats
// @desc Get all new gameStat
// @access Public
router.get("/", async (req, res) => {
  try {
    const games = await GameStat.find().sort({ date: -1 });
    res.json(games);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/gameStats
// @desc Save a new gameStat
// @access Public
router.post("/", async (req, res) => {
  try {
    const gameStat = new GameStat({
      winner: req.body.winner,
      board: req.body.board,
    });

    const game = await gameStat.save();

    res.json(game);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
