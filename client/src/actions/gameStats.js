import axios from "axios";

export const getGameStats = async () => {
  try {
    const res = await axios.get("/api/gameStats");

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    if (err) {
      console.error(err);
    }
  }
};

export const postGameStats = async (winner, board) => {

  try {
    const res = await axios.post("/api/gameStats", {winner, board});

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    if (err) {
      console.error(err);
    }
  }
}
