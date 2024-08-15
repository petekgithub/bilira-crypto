import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getMarketData } from "./services/marketService";

dotenv.config();

const app = express();
app.use(cors());

app.get("/api/assets", async (req, res) => {
  try {
    const data = await getMarketData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch market data" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
