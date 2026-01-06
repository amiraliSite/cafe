import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=AIzaSyAChMlZTPwcfTA4QnQmC6PBwnXj_Gm9OzQ",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: req.body.contents
        })
      }
    );

    const data = await response.json();
    res.json(data);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3001, () => console.log("Backend running on http://localhost:3001"));
