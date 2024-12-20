const db = require("../database/database.js");


express.getAllmedications = async (req, res) => {
    try {
       console.log("lancement de la requete d'affichage");
       const rows = await db.pool.query("SELECT * FROM medication");
       console.log("rows");
       res.status(200).json(rows);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

exports.getMedicationById = async (req, res) => {
    try {
        const id = req.params.id;
        const rows = await db.pool.query("SELECT * FROM medication WHERE id = ?", [id]);
        res.status(200).json(rows);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }   
}