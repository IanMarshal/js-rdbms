import express from "express";
import engine from "./db/engine.js";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

app.post("/query", (req, res) => {
  try {
    const { sql } = req.body;
    const result = engine.execute(sql);
    res.json({ success: true, result });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});


app.listen(5000, () => console.log("Server running on port 5000"));
