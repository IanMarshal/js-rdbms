import express, { json } from "express.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend running" });
});

app.listen(5000, () => {
  console.log("Backend listening on port 5000");
});
