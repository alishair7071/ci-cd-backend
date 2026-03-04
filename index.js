import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

let messages = ["Hello from backend", "CI/CD demo message"];

app.get("/get-messages", (req, res) => {
  res.json({ messages });
});

app.post("/add-message", (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "text is required" });
  }

  messages.push(text);
  res.json({ messages });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});

