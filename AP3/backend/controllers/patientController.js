const db = require("../database/database.js");

express.getAllpatients = async (req, res) => {
    try {
       console.log("lancement de la requete d'affichage");
       const rows = await db.pool.query("SELECT * FROM patient");
       console.log("rows");
       res.status(200).json(rows);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

exports.getPatientById = async (req, res) => {
    try {
        const id = req.params.id;
        const rows = await db.pool.query("SELECT * FROM patient WHERE id = ?", [id]);
        res.status(200).json(rows);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }   
}