import express from "express";

const app = express();
const PORT = 3000;

app.get("", (req, res) => {
    res.status(200).json({
        "message": "ok",
    });
})

app.listen(PORT, () => {
    console.log("Servidor rodando no http://localhost:3000")
})