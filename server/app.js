import express from "express";
import path from "path"; // new line
import { fileURLToPath } from "url"; // new line

const __filename = fileURLToPath(import.meta.url); // new line
const __dirname = path.dirname(__filename); // new line

const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, "dist"))); // new line

app.get("/sneha", (req, res) => {
    try {
        res.status(200).json({ message: "Hello, sneha!" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

// new 3 lines
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});