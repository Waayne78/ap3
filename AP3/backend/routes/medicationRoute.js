const express = require("express");
const router = express.Router();
const db = require("../database/database");

// Route pour récupérer toutes les medications
router.get("/", async (req, res) => {
    try {
        console.log("Fetching all medications");
        const [rows] = await db.pool.query("SELECT * FROM medication");
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

// Route pour récupérer une medication par ID
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const [rows] = await db.pool.query("SELECT * FROM medication WHERE id = ?", [id]);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

module.exports = router;
