const express = require("express");
const router = express.Router();
const db = require("../database/database");

// Route pour récupérer tous les patients
router.get("/", async (req, res) => {
    try {
        console.log("Fetching all patients");
        const [rows] = await db.pool.query("SELECT * FROM patient");
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

// Route pour récupérer un patient par ID
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const [rows] = await db.pool.query("SELECT * FROM patient WHERE id = ?", [id]);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

module.exports = router;
