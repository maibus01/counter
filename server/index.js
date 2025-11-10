const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let counter = 0;

app.get("/api/count", (req, res) => res.json({ count: counter }));
app.post("/api/increase", (req, res) => { counter++; res.json({ count: counter }); });
app.post("/api/decrease", (req, res) => { counter--; res.json({ count: counter }); });
app.post("/api/reset", (req, res) => { counter = 0; res.json({ count: counter }); });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

